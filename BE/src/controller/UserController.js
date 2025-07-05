import User from "../model/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const createTransporter = () => {
  return nodemailer.createTransporter({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password -confirmCode");
    res.json(users);
  } catch (error) {
    console.error("Get users error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  // Input validation
  if (!username || !email || !password) {
    return res.status(400).json({ 
      message: "Username, email və şifrə sahələri tələb olunur" 
    });
  }

  if (password.length < 6) {
    return res.status(400).json({ 
      message: "Şifrə ən azı 6 simvol olmalıdır" 
    });
  }

  try {
    const existingUser = await User.findOne({
      $or: [{ username }, { email }],
    });
    
    if (existingUser) {
      if (existingUser.email === email) {
        return res.status(400).json({ 
          message: "Bu email ünvanı artıq istifadə olunur" 
        });
      }
      if (existingUser.username === username) {
        return res.status(400).json({ 
          message: "Bu istifadəçi adı artıq istifadə olunur" 
        });
      }
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const confirmCode = Math.floor(100000 + Math.random() * 900000).toString();

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      confirmCode,
      isConfirmed: false,
    });

    await newUser.save();

    // Email göndərmə
    try {
      const transporter = createTransporter();
      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: email,
        subject: "Email Təsdiqi - MindCare",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #10b981;">Salam, ${username}!</h2>
            <p>MindCare platformasına xoş gəldiniz!</p>
            <p>Hesabınızı təsdiqləmək üçün aşağıdakı kodu istifadə edin:</p>
            <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; text-align: center;">
              <h3 style="color: #10b981; font-size: 24px; margin: 0;">${confirmCode}</h3>
            </div>
            <p style="margin-top: 20px;">Bu kod 24 saat ərzində etibarlıdır.</p>
            <p style="color: #666; font-size: 14px;">
              Əgər siz bu istəyi etməmisinizsə, zəhmət olmasa bu mesajı nəzərə almayın.
            </p>
          </div>
        `,
      });
      
      console.log(`Confirmation email sent to ${email}`);
    } catch (emailError) {
      console.error("Email sending error:", emailError);
      // İstəyə görə user-i sil və ya email göndərmə səhvini ignore et
      // Hazırda user-i saxlayırıq, lakin email göndərilmədi
    }

    res.status(201).json({ 
      message: "Qeydiyyat uğurla tamamlandı. Email ünvanınızı yoxlayın." 
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server xətası" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  // Input validation
  if (!email || !password) {
    return res.status(400).json({ 
      message: "Email və şifrə sahələri tələb olunur" 
    });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ 
        message: "Belə bir istifadəçi tapılmadı. Zəhmət olmasa qeydiyyatdan keçin." 
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ 
        message: "Email və ya şifrə səhvdir" 
      });
    }

    if (!user.isConfirmed) {
      return res.status(403).json({ 
        message: "Əvvəlcə email ünvanınızı təsdiqləyin" 
      });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username }, 
      process.env.JWT_SECRET, 
      { expiresIn: "7d" }
    );

    res.status(200).json({
      message: "Giriş uğurla tamamlandı",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server xətası" });
  }
};

export const confirm = async (req, res) => {
  const { email, confirmCode } = req.body;

  if (!email || !confirmCode) {
    return res.status(400).json({ 
      message: "Email və təsdiq kodu tələb olunur" 
    });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ 
        message: "Belə bir istifadəçi tapılmadı" 
      });
    }

    if (user.isConfirmed) {
      return res.status(400).json({ 
        message: "Hesab artıq təsdiqlənmişdir" 
      });
    }

    if (user.confirmCode !== confirmCode) {
      return res.status(400).json({ 
        message: "Təsdiq kodu səhvdir" 
      });
    }

    user.isConfirmed = true;
    user.confirmCode = null;
    await user.save();

    res.status(200).json({ 
      message: "Email uğurla təsdiqləndi" 
    });
  } catch (error) {
    console.error("Email confirmation error:", error);
    res.status(500).json({ message: "Server xətası" });
  }
};

// Yenidən confirmation code göndərmək üçün
export const resendConfirmation = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ 
      message: "Email tələb olunur" 
    });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ 
        message: "Belə bir istifadəçi tapılmadı" 
      });
    }

    if (user.isConfirmed) {
      return res.status(400).json({ 
        message: "Hesab artıq təsdiqlənmişdir" 
      });
    }

    // Yeni kod yarat
    const confirmCode = Math.floor(100000 + Math.random() * 900000).toString();
    user.confirmCode = confirmCode;
    await user.save();

    // Email göndər
    try {
      const transporter = createTransporter();
      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: email,
        subject: "Yeni Email Təsdiqi - MindCare",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #10b981;">Salam, ${user.username}!</h2>
            <p>Yeni təsdiq kodunuz:</p>
            <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; text-align: center;">
              <h3 style="color: #10b981; font-size: 24px; margin: 0;">${confirmCode}</h3>
            </div>
            <p style="margin-top: 20px;">Bu kod 24 saat ərzində etibarlıdır.</p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Email sending error:", emailError);
      return res.status(500).json({ 
        message: "Email göndərmə xətası" 
      });
    }

    res.status(200).json({ 
      message: "Yeni təsdiq kodu göndərildi" 
    });
  } catch (error) {
    console.error("Resend confirmation error:", error);
    res.status(500).json({ message: "Server xətası" });
  }
};
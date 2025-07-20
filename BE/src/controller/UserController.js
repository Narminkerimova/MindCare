import User from '../model/UserModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER, 
        pass: process.env.GMAIL_PASS, 
    },
});

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1h', 
    });
};

const cookieOptions = {
    httpOnly: true, 
    secure: process.env.NODE_ENV === 'production', 
    maxAge: 3600000,
    sameSite: 'Lax', 
};

export const register = async (req, res) => {
    const { username, email, password, role = 'user' } = req.body; 

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Bütün sahələr tələb olunur.' });
    }

    const allowedRoles = ['user', 'doctor', 'patient', 'admin'];
    if (!allowedRoles.includes(role)) {
        return res.status(400).json({ message: 'Yanlış rol təyin edildi.' });
    }

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'Bu email artıq qeydiyyatdan keçib.' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const confirmationCode = Math.floor(100000 + Math.random() * 900000).toString(); 

        const user = await User.create({
            username,
            email,
            password: hashedPassword,
            confirmationCode,
            isConfirmed: false, 
            role: role, 
        });

        const mailOptions = {
            from: process.env.GMAIL_USER, 
            to: user.email,
            subject: 'MindCare: Hesabınızı təsdiqləyin',
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <h2 style="color: #7dd3c0;">MindCare Hesab Təsdiqlənməsi</h2>
                    </div>
                    <p>Salam ${username},</p>
                    <p>MindCare-ə qeydiyyatınız uğurlu oldu! Hesabınızı aktivləşdirmək üçün aşağıdakı təsdiq kodunu daxil edin:</p>
                    <div style="text-align: center; margin: 25px 0;">
                        <span style="display: inline-block; background-color: #7dd3c0; color: white; font-size: 24px; font-weight: bold; padding: 15px 30px; border-radius: 5px; letter-spacing: 3px;">
                            ${confirmationCode}
                        </span>
                    </div>
                    <p>Bu kodu tətbiqimizdəki təsdiqləmə səhifəsinə daxil edin.</p>
                    <p>Əgər siz qeydiyyatdan keçməmisinizsə, bu emaili nəzərə almayın.</p>
                    <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #777;">
                        <p>&copy; ${new Date().getFullYear()} MindCare. Bütün hüquqlar qorunur.</p>
                    </div>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        res.status(201).json({
            success: true,
            message: 'Qeydiyyat uğurlu! Təsdiq kodu emailə göndərildi.',
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        console.error("Register error:", error);
        res.status(500).json({ message: 'Qeydiyyat zamanı xəta baş verdi.' });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email və şifrə tələb olunur.' });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Yanlış email və ya şifrə.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Yanlış email və ya şifrə.' });
        }

        if (!user.isConfirmed) {
            return res.status(403).json({ message: 'Hesabınız təsdiqlənməyib. Zəhmət olmasa emailinizi təsdiqləyin.' });
        }

        const token = generateToken(user._id);

        res.cookie('token', token, cookieOptions);

        res.status(200).json({
            success: true,
            message: 'Giriş uğurlu!',
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: 'Giriş zamanı xəta baş verdi.' });
    }
};

export const confirmAccount = async (req, res) => {
    const { email, confirmCode } = req.body;

    if (!email || !confirmCode) {
        return res.status(400).json({ message: 'Email və təsdiq kodu tələb olunur.' });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'İstifadəçi tapılmadı.' });
        }

        if (user.isConfirmed) {
            return res.status(400).json({ message: 'Hesabınız artıq təsdiqlənib.' });
        }

        if (user.confirmationCode !== confirmCode) {
            return res.status(400).json({ message: 'Yanlış təsdiq kodu.' });
        }

        user.isConfirmed = true;
        user.confirmationCode = undefined; 
        await user.save();

        const token = generateToken(user._id);
        res.cookie('token', token, cookieOptions);

        res.status(200).json({
            success: true,
            message: 'Hesabınız uğurla təsdiqləndi!',
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        console.error("Confirm account error:", error);
        res.status(500).json({ message: 'Hesab təsdiqlənməsi zamanı xəta baş verdi.' });
    }
};

export const resendConfirmationCode = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email tələb olunur.' });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'İstifadəçi tapılmadı.' });
        }

        if (user.isConfirmed) {
            return res.status(400).json({ message: 'Hesabınız artıq təsdiqlənib.' });
        }

        const newConfirmationCode = Math.floor(100000 + Math.random() * 900000).toString();
        user.confirmationCode = newConfirmationCode;
        await user.save();

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: user.email,
            subject: 'MindCare: Yeni Təsdiq Kodu',
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <h2 style="color: #7dd3c0;">MindCare Yeni Təsdiq Kodu</h2>
                    </div>
                    <p>Salam ${user.username},</p>
                    <p>Hesabınız üçün yeni təsdiq kodunuz aşağıdadır:</p>
                    <div style="text-align: center; margin: 25px 0;">
                        <span style="display: inline-block; background-color: #7dd3c0; color: white; font-size: 24px; font-weight: bold; padding: 15px 30px; border-radius: 5px; letter-spacing: 3px;">
                            ${newConfirmationCode}
                        </span>
                    </div>
                    <p>Bu kodu tətbiqimizdəki təsdiqləmə səhifəsinə daxil edin.</p>
                    <p>Əgər siz bu kodu tələb etməmisinizsə, bu emaili nəzərə almayın.</p>
                    <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #777;">
                        <p>&copy; ${new Date().getFullYear()} MindCare. Bütün hüquqlar qorunur.</p>
                    </div>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true, message: 'Yeni təsdiq kodu emailinizə göndərildi.' });
    } catch (error) {
        console.error("Resend confirmation code error:", error);
        res.status(500).json({ message: 'Təsdiq kodu yenidən göndərilərkən xəta baş verdi.' });
    }
};

export const logout = (req, res) => {
    res.cookie('token', 'none', {
        expires: new Date(Date.now() + 10 * 1000), 
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Lax',
    });
    res.status(200).json({ success: true, message: 'Uğurla çıxış edildi.' });
};

export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');

        if (!user) {
            return res.status(404).json({ message: 'İstifadəçi tapılmadı.' });
        }

        res.status(200).json({
            success: true,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
                isConfirmed: user.isConfirmed,
            },
        });

    } catch (error) {
        console.error('User /me endpoint xətası:', error);
        res.status(500).json({ message: 'Server xətası.' });
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password -confirmPassword -confirmationCode');
        res.status(200).json({ success: true, data: users }); 
    } catch (error) {
        console.error("Error fetching users (admin):", error); 
        res.status(500).json({ message: 'İstifadəçilər gətirilərkən xəta baş verdi.' });
    }
};

export const updateUserRole = async (req, res) => {
    const { id } = req.params;
    const { role } = req.body;

    if (!role) {
        return res.status(400).json({ message: 'Rol tələb olunur.' });
    }

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'İstifadəçi tapılmadı.' });
        }

        user.role = role;
        await user.save();

        res.status(200).json({ success: true, message: 'İstifadəçi rolu uğurla yeniləndi.', user });
    } catch (error) {
        console.error("Error updating user role:", error);
        res.status(500).json({ message: 'İstifadəçi rolu yenilənərkən xəta baş verdi.' });
    }
};

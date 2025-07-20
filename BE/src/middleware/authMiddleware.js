import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../model/UserModel.js'; 

dotenv.config();

export const protect = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Token yoxdur. Zəhmət olmasa daxil olun.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    req.user = await User.findById(decoded.id).select('-password -confirmPassword');

    if (!req.user) {
      return res.status(401).json({ message: 'İstifadəçi tapılmadı.' });
    }

    next(); 
  } catch (error) {
    console.error("Token verification error:", error); 
    return res.status(401).json({ message: 'Token etibarsızdır və ya müddəti bitmişdir.' });
  }
};

export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Bu əməliyyat üçün icazəniz yoxdur.' });
    }
    next();
  };
};
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    confirmationCode: { type: String, default: null }, 
    isConfirmed: { 
        type: Boolean,
        default: false, 
    },
    role: { 
        type: String,
        enum: ['user', 'doctor', 'admin', 'patient'], 
        default: 'user'
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;

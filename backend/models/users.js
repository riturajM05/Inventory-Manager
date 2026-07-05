import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new mongoose({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
})

const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel;
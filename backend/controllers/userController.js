import userModel from "../models/users.js";
import bcrypt from 'bcrypt'
import validator from 'validator';
import jwt from 'jsonwebtoken';

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email })
        if (!user) {
            throw new Error("Invalid Credentials")
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            throw new Error("Invalid Credentials")
        }

        const token = createToken(user._id);
        res.json({success: true, token})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const exists = await userModel.findOne({ email })
        if (exists) {
            throw new Error("User already exists")
        }

        if (!validator.isEmail(email)) {
            throw new Error("Please enter a valid email")
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)

        res.json({success: true, token})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

export { loginUser,registerUser }
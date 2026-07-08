import jwt from 'jsonwebtoken';

const authUser = (req, res, next) => {
    try {
        const {token} = req.headers;
        if (!token) {
            throw new Error("Not authorized, login again")
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({success: false, error: 'Invalid token' });
    }
}

export default authUser
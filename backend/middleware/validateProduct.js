import { body, validationResult } from "express-validator";

const validateproduct = [
    body('name').trim().notEmpty().withMessage('name is required'),
    body('price').isFloat({gt : 0}).withMessage('Price must be > 0'),
    (req,res,next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.json({success: false, errors: errors.array()});
        }
        next();
    }
]

export default validateproduct;
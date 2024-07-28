import jwt from 'jsonwebtoken';
import Doctor from '../models/DoctorSchema.js';
import User from '../models/UserSchema.js';

export const authenticate = async (req, res, next) => {
    const authToken = req.headers.authorization;

    if (!authToken || !authToken.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: 'No token, authorization denied' });
    }

    try {
        const token = authToken.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Ensure you have a JWT_SECRET in your environment variables

        // Optionally, you can fetch the user from the database using the decoded data
        req.user = decoded; // Assuming the token contains user information

        next();
    } catch (err) {
        res.status(401).json({ success: false, message: 'Token is not valid' });
    }
};

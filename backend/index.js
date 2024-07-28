import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import authRoute from './Routes/auth.js';
import userRoute from './Routes/user.js';
import doctorRoute from './Routes/doctor.js';
// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
    origin: true,
};

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/users',userRoute)
app.use('/api/v1/doctors',doctorRoute)

// Test route
app.get("/", (req, res) => {
    res.send("API is working");
});

// Database connection
mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URL;
        if (!mongoURI) {
            throw new Error("MONGO_URL environment variable is not set.");
        }

        console.log('Attempting to connect to MongoDB ');
        
        await mongoose.connect(mongoURI);
        console.log('MongoDB database is connected');
    } catch (err) {
        console.error('MongoDB database connection failed:', err.message);
        process.exit(1); // Exit the process with failure
    }
};

// Start the server and connect to the database
app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
});

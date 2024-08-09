import Review from '../models/ReviewSchema.js';
import Doctor from '../models/DoctorSchema.js';

// Get all reviews
export const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find({});
        console.log("Reviews retrieved:", reviews); // Debugging line
        res.status(200).json({ success: true, message: 'Successful', data: reviews });
    } catch (err) {
        console.error("Error fetching reviews:", err); // Debugging line
        res.status(500).json({ success: false, message: 'Not Successful' });
    }
};


// Create review
export const createReview = async (req, res) => {
    if (!req.body.doctor) req.body.doctor = req.params.doctorId;
    if (!req.body.user) req.body.user = req.userId;

    const newReview = new Review(req.body);

    try {
        const savedReview = await newReview.save();

        await Doctor.findByIdAndUpdate(req.body.doctor, {
            $push: { reviews: savedReview._id }
        });

        res.status(200).json({ success: true, message: "Review submitted", data: savedReview });
    } catch (err) {
        console.error("Error creating review:", err); // Debugging line
        res.status(500).json({ success: false, message: err.message });
    }
    
};

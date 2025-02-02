// models/Quiz.js
const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    questions: [
        {
            question: { type: String, required: true },
            options: { type: [String], required: true },
            correctAnswer: { type: String, required: true }
        }
    ],
}, { timestamps: true });

module.exports = mongoose.model('Quiz', QuizSchema);
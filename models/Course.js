// models/Course.js
const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    instructorName: { type: String, required: true },
    language: { type: String, required: true },
    level: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: String, required: true },
    visibility: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Course', CourseSchema);
// routes/quizzes.js
const express = require('express');
const Quiz = require('../models/Quiz');
const Course = require('../models/Course');
const router = express.Router();

// Create a new quiz for a course
router.post('/:courseId', async (req, res) => {
    try {
        const course = await Course.findById(req.params.courseId);
        if (!course) return res.status(404).json({ message: 'Course not found' });

        const quiz = new Quiz({ ...req.body, courseId: course._id });
        await quiz.save();
        res.status(201).json(quiz);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Retrieve all quizzes for a course
router.get('/:courseId', async (req, res) => {
    try {
        const quizzes = await Quiz.find({ courseId: req.params.courseId });
        res.json(quizzes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Retrieve a specific quiz
router.get('/:id', async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id);
        if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
        res.json(quiz);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a quiz
router.put('/:id', async (req, res) => {
    try {
        const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
        res.json(quiz);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a quiz
router.delete('/:id', async (req, res) => {
    try {
        const quiz = await Quiz.findByIdAndDelete(req.params.id);
        if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
        res.json({ message: 'Quiz deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
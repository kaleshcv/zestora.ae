const express = require('express');
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');

const router = express.Router();

// POST /api/contact - Submit a contact form
router.post(
  '/',
  [
    body('name')
      .trim()
      .notEmpty().withMessage('Name is required')
      .isLength({ max: 100 }).withMessage('Name cannot exceed 100 characters')
      .escape(),
    body('email')
      .trim()
      .notEmpty().withMessage('Email is required')
      .isEmail().withMessage('Please provide a valid email')
      .normalizeEmail(),
    body('phone')
      .optional({ values: 'falsy' })
      .trim()
      .isLength({ max: 20 }).withMessage('Phone cannot exceed 20 characters'),
    body('company')
      .optional({ values: 'falsy' })
      .trim()
      .isLength({ max: 100 }).withMessage('Company name cannot exceed 100 characters')
      .escape(),
    body('message')
      .trim()
      .notEmpty().withMessage('Message is required')
      .isLength({ max: 2000 }).withMessage('Message cannot exceed 2000 characters'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
      const { name, email, phone, company, message } = req.body;
      const contact = await Contact.create({ name, email, phone, company, message });
      res.status(201).json({ success: true, data: { id: contact._id } });
    } catch (err) {
      console.error('Contact submission error:', err);
      res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
    }
  }
);

// GET /api/contact - Get all contact submissions (for admin use)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: contacts });
  } catch (err) {
    console.error('Fetch contacts error:', err);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

module.exports = router;

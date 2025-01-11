const express = require('express');
const { getChatHistory } = require('../controllers/chatController');

const router = express.Router();

router.get('/history', getChatHistory);

module.exports = router;


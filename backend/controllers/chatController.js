const messages = [];

const getChatHistory = (req, res) => {
    res.json({ success: true, messages });
};

module.exports = { getChatHistory };
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.signup = async (req, res) => {
    const { username, password } = req.body;
    const user = new User({ username, password });
    try {
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
    const isValidPassword = await user.isValidPassword(password);
    if (!isValidPassword) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
    const token = jwt.sign({ id: user._id }, 'secret-key', { expiresIn: '1h' });
    res.json({ token });
};

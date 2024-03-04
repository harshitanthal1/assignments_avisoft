const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Controller to handle user signup
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

// Controller to handle user login
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

// Controller to handle updating user information
exports.updateUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.username = username;
        user.password = password;
        await user.save();
        res.json({ message: 'User updated successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller to handle deleting a user
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await user.remove();
        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

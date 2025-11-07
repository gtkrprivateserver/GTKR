const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../content/User');

// Register
router.post('/register', async (req,res)=>{
    const { username,email,password } = req.body;
    try{
        let user = await User.findOne({ email });
        if(user) return res.status(400).json({ message:'User already exists' });
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        user = new User({ username,email,password:hashedPassword });
        await user.save();

        const payload = { user:{ id:user._id } };
        const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn:'7d' });
        res.json({ token });
    }catch(err){ res.status(500).send('Server error'); }
});

// Login
router.post('/login', async(req,res)=>{
    const { email,password } = req.body;
    try{
        let user = await User.findOne({ email });
        if(!user) return res.status(400).json({ message:'Invalid credentials' });

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(400).json({ message:'Invalid credentials' });

        const payload = { user:{ id:user._id } };
        const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn:'7d' });
        res.json({ token });
    }catch(err){ res.status(500).send('Server error'); }
});

module.exports = router;

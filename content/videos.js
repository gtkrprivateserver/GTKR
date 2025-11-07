const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const auth = require('../content/auth');
const Video = require('../content/Video');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Upload video
router.post('/upload', auth, upload.single('video'), async(req,res)=>{
    try{
        const fileStr = req.file.buffer.toString('base64');
        const uploadRes = await cloudinary.uploader.upload_stream({ resource_type:'video' }, (error,result)=>{
            if(error) return res.status(500).json({ success:false, error });
            const newVideo = new Video({
                url: result.secure_url,
                title: req.body.title || 'Untitled',
                uploadedBy: req.user.id
            });
            newVideo.save().then(()=>res.json({ success:true, video:newVideo }));
        });
        uploadRes.end(req.file.buffer);
    }catch(err){ res.status(500).json({ success:false, error:err.message }); }
});

// Get videos
router.get('/', async(req,res)=>{
    try{
        const videos = await Video.find().sort({ createdAt:-1 });
        res.json(videos);
    }catch(err){ res.status(500).json({ error:err.message }); }
});

// Like or Comment
router.post('/', auth, async(req,res)=>{
    const { videoId, action, comment, username } = req.body;
    try{
        const video = await Video.findById(videoId);
        if(!video) return res.status(404).json({ message:'Video not found' });

        if(action==='like'){ video.likes += 1; }
        if(action==='comment'){ video.comments.push({ username, text:comment }); }
        await video.save();
        res.json({ success:true });
    }catch(err){ res.status(500).json({ error:err.message }); }
});

module.exports = router;

const mongoose = require('mongoose');
const videoSchema = new mongoose.Schema({
    title: { type: String },
    url: { type: String, required:true },
    likes: { type: Number, default:0 },
    comments: [
        {
            username: String,
            text: String,
            createdAt: { type: Date, default: Date.now }
        }
    ],
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref:'User' }
}, { timestamps:true });

module.exports = mongoose.model('Video', videoSchema);

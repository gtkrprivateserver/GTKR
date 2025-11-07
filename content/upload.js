import { MongoClient } from 'mongodb';
import formidable from 'formidable';
import cloudinary from 'cloudinary';

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const client = new MongoClient(process.env.MONGO_URI);
await client.connect();
const db = client.db('videoPlatform');
const videos = db.collection('videos');

export const config = { api: { bodyParser: false } };

export default async function handler(req,res){
  if(req.method==='POST'){
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files)=>{
      if(err) return res.json({success:false});
      const file = files.video;
      const result = await cloudinary.v2.uploader.upload(file.filepath, { resource_type:'video' });
      await videos.insertOne({ 
        url: result.secure_url, 
        uploadedAt: new Date(),
        likes: 0,
        comments: []
      });
      res.json({success:true,url:result.secure_url});
    });
  } else res.status(405).end();
}

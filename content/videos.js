import { MongoClient, ObjectId } from 'mongodb';

const client = new MongoClient(process.env.MONGO_URI);
await client.connect();
const db = client.db('videoPlatform');
const videos = db.collection('videos');

export default async function handler(req,res){
  if(req.method==='GET'){
    const all = await videos.find().toArray();
    res.json(all);
  } else if(req.method==='POST'){
    const { videoId, action, comment, username } = req.body;
    if(action === 'like') {
      await videos.updateOne(
        { _id: new ObjectId(videoId) },
        { $inc: { likes: 1 } }
      );
      res.json({ success: true });
    } else if(action === 'comment') {
      await videos.updateOne(
        { _id: new ObjectId(videoId) },
        { $push: { comments: { username, text: comment, date: new Date() } } }
      );
      res.json({ success: true });
    } else res.status(400).json({ success:false });
  } else res.status(405).end();
}

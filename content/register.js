import { MongoClient } from 'mongodb';
import bcrypt from 'bcrypt';

const client = new MongoClient(process.env.MONGO_URI);
await client.connect();
const db = client.db('videoPlatform');
const users = db.collection('users');

export default async function handler(req, res) {
  if(req.method==='POST') {
    const { username, password } = req.body;
    if(await users.findOne({ username })) return res.json({success:false,message:'User exists'});
    const hash = await bcrypt.hash(password,10);
    await users.insertOne({ username, password: hash });
    res.json({success:true,message:'User created'});
  } else res.status(405).end();
}

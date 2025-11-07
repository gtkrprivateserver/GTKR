import { MongoClient } from 'mongodb';
import bcrypt from 'bcrypt';

const client = new MongoClient(process.env.MONGO_URI);
await client.connect();
const db = client.db('videoPlatform');
const users = db.collection('users');

export default async function handler(req,res){
  if(req.method==='POST'){
    const { username,password } = req.body;
    const user = await users.findOne({ username });
    if(!user) return res.json({success:false,message:'Invalid credentials'});
    const match = await bcrypt.compare(password,user.password);
    if(match) res.json({success:true}); else res.json({success:false,message:'Invalid credentials'});
  } else res.status(405).end();
}

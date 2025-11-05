// server.js
const express = require('express');
const http = require('http');
const { Client, GatewayIntentBits } = require('discord.js');
const { Server } = require('socket.io');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve frontend
app.use(express.static('public'));
app.use(express.json());

// Discord bot
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const CHANNEL_ID = process.env.DISCORD_CHANNEL_ID;

client.once('ready', () => {
    console.log(`Discord Bot logged in as ${client.user.tag}`);
});

client.login(process.env.DISCORD_BOT_TOKEN);

// Listen messages from Discord → website
client.on('messageCreate', message => {
    if(message.channel.id === CHANNEL_ID && !message.author.bot){
        io.emit('discordMessage', { author: message.author.username, content: message.content });
    }
});

// Socket.IO: website → Discord
io.on('connection', socket => {
    console.log('User connected');

    socket.on('sendMessage', msg => {
        const channel = client.channels.cache.get(CHANNEL_ID);
        if(channel) channel.send(msg);
    });

    socket.on('disconnect', () => console.log('User disconnected'));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

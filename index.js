const express = require('express');
const dotenv = require('dotenv');
const TelegramBot = require('node-telegram-bot-api');

dotenv.config()
const app = express();
const port = process.env.port;
const token = process.env.teleToken;

const bot = new TelegramBot(token, { polling: true });

app.use(express.json());

app.listen(port, async () => {
    console.log(`app is running on port ${port}`);
});

app.get('*', function (req, res) {
    res.send('hello get');
});
app.post('*', function (req, res) {
    res.send('hello get');
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Received your message');
});
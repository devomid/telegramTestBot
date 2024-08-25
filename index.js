const express = require('express');
const dotenv = require('dotenv');
const TelegramBot = require('node-telegram-bot-api');

dotenv.config()
const app = express();
const port = process.env.port;
const token = process.env.teleToken;

const bot = new TelegramBot(token, { polling: true });

app.use(express.json());


app.get('*', async (req, res) => {
    res.send('hello get');
    console.log(req.body);
});
app.post('*', async (req, res) => {
    res.send('hello get');
});

app.listen(port, function () {
    console.log(`app is running on port ${port}`);
});

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const userName = msg.from.first_name
    bot.sendMessage(chatId, `خوش اومدی ${userName} جان`)
})

// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
//     const userName = msg.from.first_name
//     const userInput = msg.text
//     console.log(msg);
//     bot.sendMessage(chatId, `پیام شما:  ${userInput}`);
// });
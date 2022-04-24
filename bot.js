"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
const Bot = require('node-telegram-bot-api');
const env = require('dotenv');
env.config();
console.log(`Token is ${process.env.BOT_TOKEN}`);
const bot = new Bot(process.env.BOT_TOKEN, { polling: false });
bot.setWebHook('https://696b-196-190-62-124.ngrok.io');


module.exports = bot
//# sourceMappingURL=bot.js.map
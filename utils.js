"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
//exports.reportToAdmin = void 0;

const bot = require('./bot');

require('dotenv').config();


const reportToAdmin = (msg, others) => {
    bot.sendMessage(process.env.ADMIN, msg, Object.assign({}, others));
};

module.exports = {reportToAdmin};
//# sourceMappingURL=utils.js.map
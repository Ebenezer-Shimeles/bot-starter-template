"use strict";
//# sourceMappingURL=added_in_group.js.map
const func = require('../state')
const bot  = require('../../bot');
const { reportToAdmin } = require('../../utils');

const removed_from_group= ({msgData}) =>{
     ///bot.sendMessage(msgData.chat.id, "Hello\n I'm dicussion group bot\n I can help you discuss in a civil manner ina group")
     reportToAdmin("I left the chat :(")
}



func.registerStateHandler(func.REMOVEDFROMGROUP, removed_from_group)
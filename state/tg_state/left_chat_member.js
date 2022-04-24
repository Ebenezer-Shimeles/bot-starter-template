"use strict";
//# sourceMappingURL=added_in_group.js.map
const func = require('../state')
const bot  = require('../../bot')

const {reportToAdmin} = require('../../utils');

const left_chat_member = ({msgData}) =>{
     //bot.sendMessage(msgData.chat.id, "Hello\n I'm dicussion group bot\n I can help you discuss in a civil manner ina group")
     reportToAdmin("one memeber left the group")
}



func.registerStateHandler(func.CHATREMOVED, left_chat_member)
"use strict";
//# sourceMappingURL=added_in_group.js.map
const func = require('../state')
const bot  = require('../../bot')

const added_in_group = ({msgData}) =>{
     bot.sendMessage(msgData.chat.id, "Hello\n I'm dicussion group bot\n I can help you discuss in a civil manner ina group")
}



func.registerStateHandler(func.ADDEDINGROUP, added_in_group)
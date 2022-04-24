"use strict";
//# sourceMappingURL=added_in_group.js.map
const func = require('../state')
const bot  = require('../../bot')

const new_member_in_group = ({msgData}) =>{
     bot.sendMessage(msgData.chat.id, "Hello new member")
}



func.registerStateHandler(func.NEWCHATMEMBER, new_member_in_group)
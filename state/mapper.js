"use strict";

const bot = require('../bot');
const { reportToAdmin } = require('../utils');
const funcs = require('./state')

bot.on('message', (msg) => {
   // reportToAdmin("Hell2")
    //reportToAdmin(JSON.stringify(msg))
    ///responsible for reporting when bot is added to a group
    if (msg['new_chat_members']) {
        const members = msg['new_chat_members'];
        reportToAdmin("Hello")
        members.forEach(member => {
            
            if(member['username'] == process.env.BOT_USERNAME){
              // reportToAdmin("Added to a group")
               funcs.handleState(funcs.ADDEDINGROUP, {msgData: msg})
            }
            else {
                funcs.handleState(funcs.NEWCHATMEMBER, {msgData: msg})
            }
        })
       
    }
    else if(msg['left_chat_member']){
        if(msg['left_chat_member']['username'] ==  process.env.BOT_USERNAME){
             //reportToAdmin("Removed from group")
             funcs.handleState(funcs.REMOVEDFROMGROUP, {msgData: msg})
        }
        else{
               // reportToAdmin('left_chat');
               funcs.handleState(funcs.CHATREMOVED, {msgData: msg})
        }
    }
    else if(msg['photo']){
    
    }
    else if(msg['text']){

    }
    else if(msg['animation']){

    }
    else if(msg['audio']){

    }
});
//# sourceMappingURL=mapper.js.map

bot.on('callback_query', (callbackData) => {

});

bot.on('inline_query', (inlineData) => {

});
const bot = require('../../bot')


const startHandler = (messageData, bot) =>{

    bot.sendMessage(messageData.chat.id, "Hello")
}


module.exports = {"/start": startHandler}
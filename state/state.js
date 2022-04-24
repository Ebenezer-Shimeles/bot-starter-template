"use strict";
const chalk = require("chalk");
const { HC } = require("../bot");

/////////////msg states
const ADDEDINGROUP = "$added_in_group";
const NEWCHATMEMBER = '$new_chat_member';
const REMOVEDFROMGROUP = '$removed_from_group';
const CHATREMOVED = '$chat_removed'
const started = '$started';
/////////////callback keywords
/////////////////////////////////
const stateNHandlers = {};
const callbackKWNHandlers = {};
const inlineStateNHandlers = {};
const registerStateHandler = (stateStr, callback) => {
    //stateNHandlers.push({ stateStr, callback });
    stateNHandlers[stateStr] = callback;
    console.log(chalk.blue("Registered :" + stateStr + " " + stateNHandlers.toString()));
};
const registerCallbackSKWHandler = (kwStr, callback) => {
    callbackKWNHandlers[kwStr] = callback;
    console.log(chalk.green(`Registered: Callback keyword ${kwStr}`));
};
const registerInlineStateHandler = (inlineStr, handler) => {
    inlineStateNHandlers[inlineStr] = handler;
};
const handleState = (stateStr, { msgData = {}, inlineData = {}, callbackData = {}, }) => {
    if (stateNHandlers[stateStr]) {
        console.log(`Msg Data ${JSON.stringify(msgData)}`)
        stateNHandlers[stateStr]({ callbackData, msgData, inlineData });
    }
    else {
        console.log(chalk.yellow("Error empty handler called " + stateStr + " " + stateNHandlers[stateStr]));
    }
};
const handleCallbackKw = (kw, { callbackData }) => {
    if (callbackKWNHandlers[kw]) {
        callbackKWNHandlers[kw]({ callbackData });
    }
    else {
        console.log(chalk.yellow("Error empty handler called " + kw + " " + stateNHandlers[kw]));
        HC.answerCallbackQuery(callbackData.id, "Wrong button!");
    }
};
module.exports = {
    handleState,
    registerStateHandler,
    registerCallbackSKWHandler,
    handleCallbackKw,
    registerInlineStateHandler,
    ADDEDINGROUP,
    REMOVEDFROMGROUP,
    NEWCHATMEMBER,
    CHATREMOVED
};
//# sourceMappingURL=index.js.map
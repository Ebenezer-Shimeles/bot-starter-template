"use strict";
const express = require("express");


const bot = require('./bot');

require('./state/index');
require('./state/mapper');

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.status(403)
    res.end("Forbidden");
});
app.post('/', (req, res) => {
    bot.processUpdate(req.body);
    res.status(200)
    res.end("ok")
});
app.listen(process.env.PORT || 8080, () => {
    console.log("runnning");
});
//# sourceMappingURL=index.js.map
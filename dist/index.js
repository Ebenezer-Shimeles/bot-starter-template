"use strict";
const express = require("express");
const app = express();
app.get('/', (req, res) => {
    res.end("hello");
});
app.listen(8080, () => {
    console.log("runnning");
});
//# sourceMappingURL=index.js.map
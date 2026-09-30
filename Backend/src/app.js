const express = require("express");

const app = express();

app.use(express.json());

const aiRoutes = require("./routes/ai.route");

app.use("/ai", aiRoutes);

module.exports = app;
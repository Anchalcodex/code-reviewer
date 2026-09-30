require("dotenv").config();

const express = require("express");
const cors = require("cors");

const aiRoutes = require("./src/routes/ai.route");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/ai", aiRoutes);

app.listen(3000, () => {
    console.log("server is running on http://localhost:3000");
});
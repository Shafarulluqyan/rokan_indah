const express = require("express");
const router = require("./router");
const user = require("./models/user");
const app = express();
const { Op } = require("sequelize");
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});

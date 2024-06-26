const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/menu", (req, res) => {
  const menu = "rendang, mie ayam, ayam goreng, telur";
  res.status(200).json({menu});
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});

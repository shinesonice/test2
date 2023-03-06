const express = require("express");
const app = express();

app.use(express.json());

app.use("/hello", (req, res, next) => {
  res.send({ hello: "HI BRO" });
});

app.listen(5000);

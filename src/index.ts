import express from "express";

const app = express();

app.route("/").get((req, res) => {
  res.send("Hei");
});

app.listen(8010);

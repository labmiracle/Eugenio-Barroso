const express = require("express");
const app = express();

const port = 4567;

const printCurrentURL = (req, res, next) => {
  console.log(`URL: ${req.url}`);
  next();
};

app.use(printCurrentURL);

app.use(express.static("/public"));

app.get("/", (req, res) => {
  res.send("Hola Miracle!");
});

app.get("/yo", (req, res) => {
  res.send("Te hablo desde /yo");
});

app.listen(port, () => {
  console.log(`Se esta escuchando el servidor http://localhost:${port}`);
});

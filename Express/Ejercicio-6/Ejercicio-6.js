const express = require("express");
const axios = require("axios");

const app = express();
const port = 4567;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/api/pokemon", async (req, res) => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"
    );
    res.json(response.data);
  } catch (error) {
    console.log("El error es:", error);
    res.status(500).json({ error: "Error en la llamada" });
  }
});

app.listen(port, () => {
  console.log(`Se esta escuchando el servidor http://localhost:${port}`);
});

const express = require("express");
const path = require("path");
const axios = require("axios");

const app = express();
const port = 5000;
const shoppingList = [];

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/items", (req, res) => {
  res.status(200).json({
    message: "Producs:",
    data: shoppingList,
  });
});

app.post("/items", (req, res) => {
  shoppingList.push(req.body);
  res.status(201).json({
    message: "Product Added",
    data: req.body,
  });
});

app.get("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const productFound = shoppingList.find((product) => product.id === id);
  if (!productFound) {
    return res.status(404).json({
      message: "Product not Found!",
      error: true,
    });
  }
});

app.patch("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price } = req.body;
  const listEdit = shoppingList.find((product) => product.id === id);
  if (!listEdit) {
    return res.status(404).json({
      message: "Item Not found",
    });

    if (name) {
      productEdit.name = name;
    }
    if (price) {
      productEdit.price = price;
    }

    return res.status(200).json({
      message: "Product Updated!",
      data: listEdit,
    });
  }
});

app.delete("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const ProductToDelete = shoppingList.find((product) => product.id === id);

  if (!ProductToDelete) {
    return res.status(404).json({
      message: "Item Not found",
    });
  }

  const ProductDeleted = shoppingList.splice(ProductToDelete.id, 1)[0];

  return res.status(200).json({
    message: "Product Deleted!",
    data: ProductDeleted,
  });
});

app.listen(port, () => {
  console.log(`Se esta escuchando el servidor http://localhost:${port}`);
});

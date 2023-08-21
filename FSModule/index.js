const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 5000;

function handle404(res) {
  const errorFilePath = path.join(__dirname, "view", "404.html");
  fs.readFile(errorFilePath, "utf8", function (err, errorData) {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error 404 - Page Not Found");
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end(errorData);
    }
  });
}

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Valor de __dirname: ${__dirname}`);
  } else if (req.url === "/about") {
    const view = path.join(__dirname, "View", "about.html");

    fs.readFile(view, "utf-8", (err, data) => {
      if (!err) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      } else {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end(`Error 500: ${err.message}`);
      }
    });
  } else if (req.url === "/example") {
    const Txt = path.join(__dirname, "example.txt");
    fs.readFile(Txt, "utf-8", (err, data) => {
      if (!err) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`Contenido de archivo.txt: ${data}`);
      } else {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end(`Error al leer archivo.txt: ${err.message}`);
      }
    });
  } else {
    handle404(res);
  }
});

server.listen(port, () => {
  console.log(`Se está escuchando http://localhost:${port}`);
});

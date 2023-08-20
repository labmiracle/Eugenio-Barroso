const http = require("http");

const port = 3000;
const server = http.createServer((req, res) => {
  if (req.url === "/quienes-somos") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>¿Quienes somos?</h1>");
  } else if (req.url === "/donde-estamos") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>¿Donde estamos?</h1>");
  } else if (req.url === "/que-hacemos") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>¿Que hacemos?</h1>");
  } else if (req.url === "/contacto") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Contacto</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 - Not Found</h1>");
  }
});

server.listen(port, () => {
  console.log(`Escuchando el servidor: http://localhost:${port}`);
});

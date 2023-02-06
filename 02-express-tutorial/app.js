const http = require("http");

const server = http.createServer((req, res) => {
  console.log("server hit");
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1>Home Page</h1>");
  res.end();
});

server.listen(4000);

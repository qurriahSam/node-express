/* 
   const http = require("http");

   const server = http.createServer((req, res) => {
     const url = req.url;
     if (url === "/") {
       res.writeHead(200, { "content-type": "text/html" });
       res.write("<h1>Home Page</h1>");
       res.end();
     } else if (url === "/about") {
       res.writeHead(200, { "content-type": "text/html" });
       res.write("<h1>About Page</h1>");
       res.end();
     } else {
       res.writeHead(404, { "content-type": "text/html" });
       res.write("<h1>404 page not found</h1>");
       res.end();
     }
   })  ;

   server.listen(4000);
*/

const express = require("express");
const app = express();

app.listen(4000, () => {
  console.log("server is listening on port 4000...");
});

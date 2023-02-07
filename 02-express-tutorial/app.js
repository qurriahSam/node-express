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
const path = require("path");
const app = express();

const { products, people } = require("./data");

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.get("/about", (req, res) => {
  res.status(200).send("about");
});

app.get("/api/products", (req, res) => {
  const minProducts = products.map((product) => {
    const { id, name, image, price } = product;
    return { id, name, image, price };
  });
  res.json(minProducts);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((product) => {
    return product.id === 1;
  });
  res.json(product);
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>path not found</h1>");
});

app.listen(4000, () => {
  console.log("server is listening on port 4000...");
});

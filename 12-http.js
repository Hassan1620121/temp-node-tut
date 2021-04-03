const http = require("http");

const server = http.createServer((req, res) => {
  //request and result
  if (req.url === "/") {
    res.write("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(
    `<h1>Oops!</h1>
    <p>We can't seem to find the page your are looking for</p>
    <a href="/">Back to home</a>
    `
  );
  // res.write();
  // res.end()
});

server.listen(9000);

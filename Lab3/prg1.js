import http from "http";

const server = http.createServer((req, res) => {
  console.log("req.url");
  console.log(req.url);
  console.log("request method:");
  console.log(req.method);
  console.log("request headers:");
    console.log(req.headers);
    console.log("request socket:");
    console.log(req.socket);


  res.end("hello!")

});

const PORT = 4444;
server.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
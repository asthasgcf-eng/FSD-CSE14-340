import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(404, { 
        "Content-Type": "text/plain",
     }); 
    res.end("<h1>Welcome to Server</h1>");
});    

server.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});
const http = require("http");
const app = require("express");

const host = 'localhost';
const port = 8000;

app.post("/post", (req, resp) => {
    console.log("Connected to React");
    resp.redirect("/");
})

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
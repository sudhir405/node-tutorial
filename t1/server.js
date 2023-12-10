const http = require("http");

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.end("welcome to my homepage")
    }
    if(req.url ==="/about"){
        res.end("here is our short history")
    }
    res.end(`
        <h1>Opps</h1>
        <p>we can't seem to find the page you are looking for</p>
        <a href="/">Home</a>
    `)
});

server.listen(5000)
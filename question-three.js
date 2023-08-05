const http = require("http");

const hostname = 'localhost';
const port = 8000;


const listener = function (req, res) {
    response.writeHead(200); 
    res.write("Hello World");
    res.end();
};



const server = http.createServer()
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})


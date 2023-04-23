require("dotenv").config("./.env");
function Joke() {
    return `What's the smartest insect? ${process.env.ANSWER}`
}
const http = require("http")
const hostname = "127.0.0.1"
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(Joke())
})

server.listen(port, hostname, () => {

})
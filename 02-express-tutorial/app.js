const http = require('http')

const server = http.createServer((req, res) => {
 console.log('server hit');
 res.end('home')
})

server.listen(4000)
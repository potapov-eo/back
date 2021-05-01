let http = require('http')

let users =[
    {"id":1, "name":"serg"},
    {"id":2, "name":"jeka"}
    ]

let cors = (req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return true;
    }
    return false
}

let server = http.createServer((req, res) => {
    if (cors(req, res)) return

    switch (req.url) {
        case "/users":
            res.write(JSON.stringify(users))
            break
        case "/lessons":
            res.write('tasks')
            break
        default :
            res.write('PAGE NOT FOUND')
    }
    res.end()
})

server.listen(8888)

console.log(http)
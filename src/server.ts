import http from "node:http";
import { stringify } from "node:querystring";

const port = 3000;

const server = http.createServer((req, res) => {
    const response = {
        message: "API restaurante",
        version: "1.0.0",
        outros: "XPTO"
    };

    res.writeHead(200, {
        "content-type": "aplication/json"
    });

    res.end(JSON.stringify(response));

    server.listen(port, () => {
        console.log(`Servidor executado em http://locahost:${port}`);
    })
})


//---CUARTA VERSIÓN SERVIDOR---//
const http = require("node:http");

const koders = ["Agustín", "Brenda", "Mariana", "Fabián"];

const server = http.createServer((request, response) => {
    const {method, url} = request;
    console.log(`${method} ${url}`);

// Servicio para administrar una lista de koders:
    // Mostrar lostado de koders
    if (method === "GET" && url === "/koders") {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(JSON.stringify(koders));
        response.end();
    }
    // Agregar koders
    if (method === "POST" && url === "/koders") {
        const newKoder = "Este es un nuevo koder"
        koders.push(newKoder);

        response.writeHead(201, { "Content-Type": "application/json" });
        response.write(JSON.stringify(koders));
        response.end();
    }
    // Eliminar koders
    
    // Reset de la lista de koders


});

server.listen(8080, () => {
    console.log("Server started on http://localhost:8080");
});


/*
//---TERCEREA VERSIÓN SERVIDOR---//
const http = require("node:http");

const server = http.createServer((request, response) => {
    console.log("method:", request.method);
    console.log("url:", request.url);

    if (request.method === "GET") {
        response.end("GET RESPONSE");
    }   else if (request.method === "POST") {
        response.end("POST RESPONSE");
    }   else {
        response.end("OTHER METHOD");
    }
});

server.listen(8080, () => {
    console.log("Server started on http://localhost:8080");
});
*/


/*
//---SEGUNDA VERSIÓN SERVIDOR---//
const http = require("node:http");

const server = http.createServer((request, response) => {
    console.log("request received");

    const obj = {
        message: "Hello worl",
    }

    response.writeHead(200, {
        "Content-Type": "application/json",
        "my-header": "Agustín",
    })
    response.write(JSON.stringify(obj))
    response.end()
});

server.listen(8080, () => {
    console.log("Server started on http://localhost:8080");
});
*/


/*
//---PRIMERA VERSIÓN SERVIDOR---//
const http = require("node:http");

const server = http.createServer((request, response) => {
    console.log("request received");

    response.writeHead(200, {
        "Content-Type": "text/plain",
        "my-header": "Agustín",
    })
    response.write("This is the response body ");
    response.write("Mensaje 2 ");
    response.write("Mensaje 3 ");
    response.end("Mensaje de finalización")
});

server.listen(8080, () => {
    console.log("Server started on http://localhost:8080");
});
*/
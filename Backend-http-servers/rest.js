const http = require("http");
const url = require("url");

const menu = [
    { id: 1, dishName: "Burger", price: 899 },
    { id: 2, dishName: "Pepperoni Pizza", price: 999 },
    { id: 3, dishName: "Fries", price: 749 },
];

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const method = req.method;

    if (method === "GET" && pathname === "/menu") {
        res.writeHead(200);
        res.end(JSON.stringify(menu));
    }

    else if (method === "GET" && pathname.startsWith("/menu/")) {
        const id = parseInt(pathname.split("/")[2]);
        const item = menu.find(item => item.id === id);

        if (item) {
            res.writeHead(200);
            res.end(JSON.stringify(item));
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({ message: "Dish not found" }));
        }
    }
});

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
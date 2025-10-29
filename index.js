const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const PORT = 8080;

function serveHtml(res, filename, statusCode = 200) {
    const filePath = path.join(__dirname, filename);
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            if (statusCode !== 404) {
                return serveHtml(res, "404.html", 404);
            }
            res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
            return res.end("<h1>404 Not Found</h1>");
        }
        res.writeHdevice-widthead(statusCode, {
            "Content-Type": "text/html; charset=utf-8",
        });
        res.end(data);
    });
}

const server = http.createServer((req, res) => {
    const { pathname } = url.parse(req.url);

    switch (pathname) {
        case "/":
            return serveHtml(res, "index.html");
        case "/about":
            return serveHtml(res, "about.html");
        case "/contact-me":
            return serveHtml(res, "contact-me.html");
        default:
            return serveHtml(res, "404.html", 404);
    }
});

server.listen(PORT, "localhost", () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

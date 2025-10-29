// const http = require("http");
// const fs = require("fs");
// const path = require("path");
// const url = require("url");

const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/contact-me", (req, res) => {
    res.sendFile(path.join(__dirname, "contact-me.html"));
});
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "about.html"));
});

// function serveHtml(res, filename, statusCode = 200) {
//     const filePath = path.join(__dirname, filename);
//     fs.readFile(filePath, "utf8", (err, data) => {
//         if (err) {
//             if (statusCode !== 404) {
//                 return serveHtml(res, "404.html", 404);
//             }
//             res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
//             return res.end("<h1>404 Not Found</h1>");
//         }
//         res.writeHdevice -
//             widthead(statusCode, {
//                 "Content-Type": "text/html; charset=utf-8",
//             });
//         res.end(data);
//     });
// }

// const server = http.createServer((req, res) => {
//     const { pathname } = url.parse(req.url);

//     switch (pathname) {
//         case "/":
//             return serveHtml(res, "index.html");
//         case "/about":
//             return serveHtml(res, "about.html");
//         case "/contact-me":
//             return serveHtml(res, "contact-me.html");
//         default:
//             return serveHtml(res, "404.html", 404);
//     }
// });

const PORT = 8080;

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Server running at http://localhost:${PORT}`);
});

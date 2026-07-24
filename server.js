const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const port = Number(process.env.PORT || 4373);
const root = __dirname;
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8"
};

function safeFile(urlPath) {
  const clean = decodeURIComponent(urlPath.split("?")[0]).replace(/^\/+/, "");
  const preferred = clean || "index.html";
  const withExtension = path.extname(preferred) ? preferred : `${preferred}.html`;
  const resolved = path.resolve(root, withExtension);
  return resolved.startsWith(path.resolve(root)) ? resolved : null;
}

const server = http.createServer((request, response) => {
  if (request.url === "/health") {
    response.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    response.end(JSON.stringify({ status: "ok", region: "eu-frankfurt" }));
    return;
  }

  let filePath = safeFile(request.url || "/");
  if (!filePath || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(root, "404.html");
    response.statusCode = 404;
  }

  const extension = path.extname(filePath).toLowerCase();
  const immutable = /\.(?:png|jpg|jpeg|webp|svg|woff2)$/i.test(extension);
  response.setHeader("Content-Type", types[extension] || "application/octet-stream");
  response.setHeader("Cache-Control", immutable ? "public, max-age=604800, immutable" : "public, max-age=0, must-revalidate");
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.setHeader("X-Frame-Options", "SAMEORIGIN");
  response.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  response.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  fs.createReadStream(filePath).pipe(response);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Odysseus concept listening on ${port}`);
});

process.on("SIGTERM", () => server.close(() => process.exit(0)));

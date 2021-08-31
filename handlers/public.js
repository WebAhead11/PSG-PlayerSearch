const path = require("path");
const fs = require("fs");
const types = {
  html: "text/html",
  css: "text/css",
  js: "application/javascript",
  jpg: "image/jpeg",
};
function publicHandler(request, response) {
  const urlArray = request.url.split("."); // e.g. "/style.css" -> ["/style", "css"]
  const extension = urlArray[1]; // e.g. "css"
  const type = types[extension]; // e.g. "text/css"
  fs.readFile(path.join(__dirname, "..", request.url), (error, file) => {
    if (error) {
      response.writeHead(404, { "content-type": "text/plain" });
      response.end(error);
    }
    response.writeHead(200, { "content-type": type });
    response.end(file);
  });
}

module.exports = publicHandler;

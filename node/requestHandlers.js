var querystring = require("querystring");
var fs = require("fs");

function start(response, postData) {
    console.log("Request handler 'start' was called.");

    fs.readFile("./client/start.html", function (err, data) {
        if (err) throw err;

        response.writeHead(200, {
            "Content-Type": "text/html"
        });
        response.write(data);
        response.end();
    });
}

function upload(response, postData) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {
        "Content-Type": "text/plain"
    });
    response.write("You've sent: " + querystring.parse(postData).text);
    response.end();
}

function show(response, postData) {
    console.log("Request handler 'show' was called.");
    fs.readFile("/presents/tmp/test.png", "binary", function (error, file) {
        if (error) {
            response.writeHead(500, {
                "Content-Type": "text/plain"
            });
            response.write(error + "\n");
            response.end();
        }
        else {
            response.writeHead(200, {
                "Content-Type": "image/png"
            });
            response.write(file, "binary");
            response.end();
        }
    });
}

function checkboxFull(response) {
    console.log("Request handler 'checkboxFull' was called.");
    fs.readFile("./images/checkboxFull.png", "binary", function (error, file) {
        if (error) {
            response.writeHead(500, {
                "Content-Type": "text/plain"
            });
            response.write(error + "\n");
            response.end();
        }
        else {
            response.writeHead(200, {
                "Content-Type": "image/png"
            });
            response.write(file, "binary");
            response.end();
        }
    });
}

function checkboxEmpty(response) {
    console.log("Request handler 'show' was called.");
    fs.readFile("./images/checkboxEmpty.png", "binary", function (error, file) {
        if (error) {
            response.writeHead(500, {
                "Content-Type": "text/plain"
            });
            response.write(error + "\n");
            response.end();
        }
        else {
            response.writeHead(200, {
                "Content-Type": "image/png"
            });
            response.write(file, "binary");
            response.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;
exports.checkboxEmpty = checkboxEmpty;
exports.checkboxFull = checkboxFull;
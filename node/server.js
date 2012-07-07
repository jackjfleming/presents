var url = require("url"),
	connect = require('connect');

function start (route, handle) {
	function onRequest (request, response) {
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		
		if (pathname == "/favicon.ico")
			return;
		console.log("Request for " + pathname + " received.");
		
		request.setEncoding("utf8");
		
		request.addListener("data", function (postDataChunk) {
			postData += postDataChunk;
			console.log("Received POST data chunk '" + postDataChunk + "'.");
		});
		
		request.addListener("end", function () {
			route(handle, pathname, response, postData);
		});
	}
	
	connect()
		.use(connect.logger('dev'))
		.use(connect.static(__dirname + '/public'))
		.use(onRequest)
		.listen(process.env.PORT);
	console.log("Server has started on port: " + process.env.PORT);
}

exports.start = start;

const http = require('http');

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'application/json'});
	let json = JSON.stringify({test: 'jenkins simple'});
	res.end(json);
}).listen(9000);

const http = require('http');

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('jenkins test');
}).listen(9000);

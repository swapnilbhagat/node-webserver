var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request,response){
	if(request.url === '/'){
		var path='./public/index.html';
		fs.readFile(path,function(err,data){
			response.end(data);
		});
	}else{
		var errorPath='./public/error.html';
		response.writeHead(403);
		fs.readFile(errorPath,function(err,data){
			response.end(data);
		});
	}
});

server.listen(3000,function(){
	console.log('Started server on 3000 port');
});

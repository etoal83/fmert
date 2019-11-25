var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {};
handle["/"] = requestHandlers.input;
handle["/input"] = requestHandlers.input;
handle["/result"] = requestHandlers.result;

server.start(router.route, handle);

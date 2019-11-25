var fs = require('fs');

function input(response) {
  console.log("Function <input> called.");
  response.writeHead(200, {"Content-type": "text/plain"});
  response.write("I'm <input> function!");
  response.end();
}

function result(response) {
  console.log("Function <result> called.");
  response.writeHead(200, {"Content-type": "text/plain"});
  response.write("I'm <result> function!");
  response.end();
}

exports.input = input;
exports.result = result;

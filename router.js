function route(handle, pathname, res) {
  if (typeof handle[pathname] === 'function') {
    handle[pathname](res);
  } else {
    res.writeHead(404, {"Content-type": "text/plain"});
    res.write("404 Not Found");
    res.end();
  }
}

exports.route = route;
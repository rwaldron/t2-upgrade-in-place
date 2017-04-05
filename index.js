let version = 1;
const net = require("net");
const server = net.createServer((socket) => {
  // The remote client will ask the server for a upgrade status...
  socket.on("data", (data) => {
    if (data.toString() === "upgrade-request") {
      // This just makes multiple requests interesting.
      if (version === 1) {
        version = 2;
      } else {
        version = 1;
      }
      socket.write(`${version}`);
    }
  });
});

server.listen(1337, "127.0.0.1");


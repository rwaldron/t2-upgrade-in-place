const version = 2;
const upgrade = require("./upgrade");
const net = require("net");
const client = new net.Socket();

client.connect(1337, "127.0.0.1", () => {
  // Phone home, ask if there is an upgrade
  client.write("upgrade-request");
});

client.on("data", (data) => {
  // If there is an upgrade, request the
  // new version and replace myself.
  upgrade(data.toString());
  client.destroy();
});

const fs = require("fs");
module.exports = function(newversion) {
  console.log(`Replacing program with version: ${newversion}`);
  // This is a stand-in for requesting a remote "update" package
  // and replacing the running code in place.
  fs.createReadStream(`./client-v${newversion}.js`).pipe(fs.createWriteStream('./client.js'));
};

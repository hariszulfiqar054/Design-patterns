const fs = require('fs');
const FS_Proxy = require('./FS_Proxy');

const fsProxy = new FS_Proxy(fs);

fsProxy.readFile('test.js', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

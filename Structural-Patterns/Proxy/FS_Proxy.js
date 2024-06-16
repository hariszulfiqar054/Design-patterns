class FS_Proxy {
  constructor(fs) {
    this.fs = fs;
  }
  readFile(path, format, callback) {
    if (!path.match(/.json$/)) {
      return callback(new Error('Only JSON files are supported'));
    } else {
      this.fs.readFile(path, format, (err, data) => {
        if (err) {
          return callback(err);
        }
        callback(null, data);
      });
    }
  }
}

module.exports = FS_Proxy;

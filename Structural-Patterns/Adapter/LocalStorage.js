const { writeFile, unlink, readFileSync, existsSync } = require('fs');

class LocalStorage {
  constructor() {
    if (existsSync('localStorage.json')) {
      const fileData = readFileSync('localStorage.json');
      this.data = JSON.parse(fileData);
    } else {
      this.data = {};
    }
  }
  setItem(key, value) {
    this.data[key] = value;
    writeFile('localStorage.json', JSON.stringify(this.data), (err) => {
      console.log(err);
    });
  }

  getItem(key) {
    return this.data[key];
  }

  clear() {
    this.data = {};
    unlink('localStorage.json', (err) => {
      console.log(err);
    });
  }
}

module.exports = new LocalStorage();

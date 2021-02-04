const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw 'Not implemented';
    }
    let keyId = -1;
    const alpLength = 26;
    key = key.toUpperCase().split('').map(item => item.charCodeAt(0) - 65);
    message = message.toUpperCase().split('').map((item) => {
      if (item.charCodeAt(0) > 64 && item.charCodeAt(0) < 91) {
        keyId++
        item = item.charCodeAt(0) - 65;
        item = (item + key[keyId % key.length]) % alpLength;
        item = item + 65;
        return String.fromCharCode(item);
      }
      return item;
    }).join('');
    return this.mode === true ? message : message.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw 'Not implemented';
    }
    let keyId = -1;
    const alpLength = 26;
    key = key.toUpperCase().split('').map(item => item.charCodeAt(0) - 65);
    message = message.toUpperCase().split('').map((item) => {
      if (item.charCodeAt(0) > 64 && item.charCodeAt(0) < 91) {
        keyId++
        item = item.charCodeAt(0) - 65;
        item = (item - key[keyId % key.length]) % alpLength;
        item < 0 ? item = 91 + item : item = 65 + item;
        return String.fromCharCode(item);
      }
      return item;
    }).join('');
    return this.mode === true ? message : message.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;

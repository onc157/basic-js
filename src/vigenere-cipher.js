const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(pointer = true) {
    this.pointer = pointer;
    this.tabulaRecta = {
      a: "abcdefghijklmnopqrstuvwxyz",
      b: "bcdefghijklmnopqrstuvwxyza",
      c: "cdefghijklmnopqrstuvwxyzab",
      d: "defghijklmnopqrstuvwxyzabc",
      e: "efghijklmnopqrstuvwxyzabcd",
      f: "fghijklmnopqrstuvwxyzabcde",
      g: "ghijklmnopqrstuvwxyzabcdef",
      h: "hijklmnopqrstuvwxyzabcdefg",
      i: "ijklmnopqrstuvwxyzabcdefgh",
      j: "jklmnopqrstuvwxyzabcdefghi",
      k: "klmnopqrstuvwxyzabcdefghij",
      l: "lmnopqrstuvwxyzabcdefghijk",
      m: "mnopqrstuvwxyzabcdefghijkl",
      n: "nopqrstuvwxyzabcdefghijklm",
      o: "opqrstuvwxyzabcdefghijklmn",
      p: "pqrstuvwxyzabcdefghijklmno",
      q: "qrstuvwxyzabcdefghijklmnop",
      r: "rstuvwxyzabcdefghijklmnopq",
      s: "stuvwxyzabcdefghijklmnopqr",
      t: "tuvwxyzabcdefghijklmnopqrs",
      u: "uvwxyzabcdefghijklmnopqrst",
      v: "vwxyzabcdefghijklmnopqrstu",
      w: "wxyzabcdefghijklmnopqrstuv",
      x: "xyzabcdefghijklmnopqrstuvw",
      y: "yzabcdefghijklmnopqrstuvwx",
      z: "zabcdefghijklmnopqrstuvwxy"
    };
  }

  encrypt(str, key) {
    if (!str || !key) {
      throw new Error('Error! 2 parameters must be specified!');
    }

    str = str.toLowerCase();
    key = key.toLowerCase();

    let encryptedStr = '';
    let count = 0;

    for (let i = 0; i < str.length; i++) {
      let columnIndex = this.tabulaRecta.a.indexOf(key[(i - count) % key.length]);

      if (this.tabulaRecta[str[i]]) {
        encryptedStr += this.tabulaRecta[str[i]][columnIndex];
      } else {
        encryptedStr += str[i];
        count++;
      }
    }

    if (!this.pointer) {
      encryptedStr = encryptedStr.split('').reverse().join('');
    }

    console.log(encryptedStr.toUpperCase());
    return encryptedStr.toUpperCase();
  }

  decrypt(str, key) {
    if (!str || !key) {
      throw new Error('Error! 2 parameters must be specified!');
    }

    str = str.toLowerCase();
    key = key.toLowerCase();

    let decryptedStr = '';
    let count = 0;

    for (let i = 0; i < str.length; i++) {
      let row = this.tabulaRecta[key[(i - count) % key.length]];

      if (row.indexOf(str[i]) !== -1) {
        decryptedStr += this.tabulaRecta.a[row.indexOf(str[i])];
      } else {
        decryptedStr += str[i];
        count++;
      }
    }

    if (!this.pointer) {
      decryptedStr = decryptedStr.split('').reverse().join('');
    }

    console.log(decryptedStr.toUpperCase());
    return decryptedStr.toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;

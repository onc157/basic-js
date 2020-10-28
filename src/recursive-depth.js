const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    let depth;

    for (let arg of arr) {
        if (!Array.isArray(arg)) {
            continue;
        }
        depth = this.calculateDepth(arg) + 1;
        if (depth > count) {
            count = depth;
        }
    }
    return count;
  }
};
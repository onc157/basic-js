const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let transformArr = [];
  if (!Array.isArray(arr)) throw 'Error';
  for (i = 0; i < arr.length; i = i + 1) {
    if (arr[i] === '--double-next') {
      if (arr[i + 1] !== undefined) {
        transformArr.push(arr[i + 1])
      }
    }
    else if (arr[i] === '--double-prev') {
      if (arr[i - 2] === '--discard-next') continue;
      else if (arr[i - 1] !== undefined ) {
        transformArr.push(arr[i - 1]);
      }
    }
    else if (arr[i] === '--discard-next') {
      if (arr[i + 1] !== undefined) {
        i = i + 1;
      }
    }
    else if (arr[i] === '--discard-prev') {
      if (arr[i - 2] === '--discard-next') continue;
      else if (arr[i - 1] !== undefined ) {
        transformArr.pop();
      }
    }
    else  transformArr.push(arr[i])
  }
  return transformArr;
};

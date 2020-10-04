const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let transformArr = [];
  if (!Array.isArray(arr)) throw 'Error';
  for (i = 0; i < arr.length; i = i + 1) {
    if ((arr[i] !== '--double-next') && (arr[i] !== '--double-prev') && (arr[i] !== '--discard-next') && (arr[i] !== '--discard-prev')) transformArr.push(arr[i]);
    else if (arr[i] === '--double-next' && arr[i + 1] !== undefined) transformArr.push(arr[i + 1]);
    else if (arr[i] === '--double-prev' && arr[i - 1] !== undefined && arr[i - 2] !== '--discard-next') transformArr.push(arr[i - 1]);
    else if (arr[i] === '--discard-next' && arr[i + 1] !== undefined) i = i + 1;
    else if (arr[i] === '--discard-prev' && arr[i - 1] !== undefined && arr[i - 2] !== '--discard-next') transformArr.pop();
  }
  return transformArr;
};

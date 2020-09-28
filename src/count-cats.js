const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let catsSum = 0;
  arr.forEach(element => {
    element.forEach(element => {
      if (element == '^^') {
        catsSum++
      }
    });
  });
  return catsSum;
};

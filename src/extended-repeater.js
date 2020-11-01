const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  let strFull = [];
  let separator = '';
  let addSeparator = '';
  let addition = [];

  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    addition.push(options.addition)
  }

  addition = addition.map(item => String(item));
  options.additionSeparator === undefined ? addSeparator = '|' : addSeparator = options.additionSeparator;
  addition = addition.join(`${addSeparator}`);

  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }

  if (options.addition === undefined) {
    addition = '';
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    strFull.push(str + addition);
  }

  options.separator === undefined ? separator = '+' : separator = options.separator;
  return strFull.join(`${separator}`);
};

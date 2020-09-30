const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!parseFloat(sampleActivity) ||
    (+sampleActivity === sampleActivity) ||
    (typeof sampleActivity === 'object') ||
    (sampleActivity < 0) ||
    (+sampleActivity > 15) ) return false;
  let result = 0;
  result = (Math.log(15 / sampleActivity)) / (0.693 / 5730);
  return Math.ceil(result);
};

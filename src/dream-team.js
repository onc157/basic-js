const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let secretName = [];
  if (!Array.isArray(members)) return false;
  members.forEach((element) => {
    if ((typeof element) === 'string') {
      element = element.trim()[0];
      secretName.push(element);
    }
  });
  secretName = secretName.map(e => e.toUpperCase()).sort().toString().split(',').join('');
  return secretName;
};

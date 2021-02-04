const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let letters = members.map(function (item) {
      if (typeof item === 'string') {
        return item.trim().slice(0, 1)
      }
    });
    letters = letters.join('').toUpperCase().split('');
    letters.sort();
    letters = letters.join('')
    return letters;
  } else {
    return false
  }
};

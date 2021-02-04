const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  }
  if (date.hasOwnProperty('getMonth')) {
    throw Error
  }
  const month = date.getMonth();

  if (month < 2 || month === 11) {
    return 'winter'
  }
  if (month < 5) {
    return 'spring'
  }
  if (month < 8) {
    return 'summer'
  }
  if (month < 11) {
    return 'autumn'
  }
};

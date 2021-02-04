const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const additionSeparator = options.additionSeparator || '|';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  let addition = options.addition;

  if (typeof addition === 'undefined') {
    str = str + separator;
    str = str.repeat(repeatTimes);
    str = str.slice(0, str.length - separator.length)
  } else {
    addition = addition + additionSeparator;
    addition = addition.repeat(additionRepeatTimes);
    addition = addition.slice(0, addition.length - additionSeparator.length);
    str = str + addition + separator
    str = str.repeat(repeatTimes);
    str = str.slice(0, str.length - separator.length)

  }
  return str
};
  
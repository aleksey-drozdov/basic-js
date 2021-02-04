const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = 2 ** disksNumber - 1;
  const speedPerSec = turnsSpeed / 3600;
  const seconds = turns / speedPerSec;
  const arr = {};
  arr.turns = turns;
  arr.seconds = Math.floor(seconds);
  return arr
};

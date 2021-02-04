const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || typeof sampleActivity !== 'string' || sampleActivity * 1 > 15 || sampleActivity * 1 < 1) {
    return false
  } else {
    let time;
    sampleActivity = sampleActivity.replace('.', 'G').replace('.', '').replace('G', '.')
    time = Math.ceil((Math.log(MODERN_ACTIVITY / (sampleActivity * 1)) / (0.693 / HALF_LIFE_PERIOD)));
    if (isNaN(time) || time < 0) {
      return false
    }
    return time
  }
};

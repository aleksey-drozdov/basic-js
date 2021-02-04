const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    for (let i = 0; i < arr.length; i++) {
      let add_depth = 1;
      if (Array.isArray(arr[i])) {
        add_depth = add_depth + this.calculateDepth(arr[i]);
        if (add_depth > depth) {
          depth = add_depth
        }
      }
    }
    return depth
  }
};
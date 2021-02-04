const CustomError = require("../extensions/custom-error");

const chainMaker = {
    arr: [],
    getLength() {
        return this.arr.length
    },

    addLink(value) {
        this.arr.push(value);
        return this
    },

    removeLink(position) {
        if (position < 1 || position > this.arr.length - 1 || !Number.isInteger(position)) {
            this.arr = [];
            throw new Error()
        } else {
            this.arr.splice(position - 1, 1);
        }
        return this
    },

    reverseChain() {
        this.arr.reverse()
        return this
    },

    finishChain() {
        let result = '';
        if (this.arr.length > 0) {
            let arr_2 = this.arr;
            arr_2.forEach((item, index) => {
                result += (index > 0) ? `~~( ${item} )` : `( ${item} )`
            });
        }
        this.arr = [];
        return result
    }
};

module.exports = chainMaker;

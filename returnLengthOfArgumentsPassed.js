/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length
};

const length =  argumentsLength(1, 2, 3); // 3

console.log(length)

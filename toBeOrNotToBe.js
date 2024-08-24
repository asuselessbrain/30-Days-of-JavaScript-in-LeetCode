/**
 * @param {string} val
 * @return {Object}
 */
var expect =  (val) => {

    var toBe = (otherVal) => {
        if (val === otherVal) {
            return true
        } else {
            throw new Error("Not Equal")
        }
    }
    var notToBe = (otherVal) => {
        if (val !== otherVal) {
            return true
        } else {
            throw new Error("Equal")
        }
    }
    return {
        toBe, 
        notToBe
    }

};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
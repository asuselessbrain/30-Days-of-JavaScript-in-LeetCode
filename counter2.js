/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let currentValue = init;

  var increment = () => {
    return ++currentValue;
  };
  var decrement = () => {
    return --currentValue;
  };

  var reset = () => {
    currentValue = init
    return init;
  };

  return {
    increment,
    decrement,
    reset,
  };
};

const counter2 = createCounter(0);
console.log(counter2.increment()); // 1
console.log(counter2.increment()); // 2
console.log(counter2.decrement()); // 1
console.log(counter2.reset()); // 0
console.log(counter2.reset()); // 0

const counter1 = createCounter(5);
console.log(counter1.increment()); // 6
console.log(counter1.reset());     // 5
console.log(counter1.decrement()); // 4

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let val = init;

  for (i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }

  return val;
};

// Example reducer function that sums two numbers
const sum = (a, b) => a + b;

// Example array
const nums = [1, 2, 3, 4];

// Initial value
const init = 0;

// Applying the reduceArray function
const result = reduce(nums, sum, init);

console.log(result); // Output: 10


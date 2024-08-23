const createHelloWorld = function () {
  return function (...args) {
    "Hello world";
  };
};

const returnedFunction = createHelloWorld();

returnedFunction();

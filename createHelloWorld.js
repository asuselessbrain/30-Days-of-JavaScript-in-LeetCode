const createHelloWorld = function () {
  return function (...args) {
    return "Hello world";
  };
};

const returnedFunction = createHelloWorld();

returnedFunction();

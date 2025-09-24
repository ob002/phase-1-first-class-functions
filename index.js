const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);
const expect = chai.expect;

function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function namedFunction() {};
}

function returnsAnAnonymousFunction() {
  return function() {};
}

module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction,
};

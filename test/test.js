
var findNumber = require("../index.js");
var expect = require("chai").expect;

describe("#findNumber", () => {

  context("start 1, end 15, increment 1, % 2 == 0", () => {
    it("should return 2", async () => {
      const divisibleByTwo = (num) => {
        return num % 2 == 0;
      };
      expect( await findNumber(1, 15, 1, divisibleByTwo)).to.equal(2);
    })
  })
})

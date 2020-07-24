var isNumber = require("is-number");

const findNumber = async (start, end, increment, matchesCondition) => {
  if (!isNumber(start) || !isNumber(end) || !isNumber(increment)) {throw new TypeError("One or more number arguments are not numbers!"); return;}
  if (typeof matchesCondition != 'function') {throw new TypeError("matchesCondition must be a function!")}
  var found = false;
  var num = start;
  while (!found) {
    found = matchesCondition(num);
    if (found) break;
    if (num + increment > end) {throw Error("No number found!"); return;}
    num = num + increment
  }
  return num;
}

module.exports = findNumber;

const findBestEmployee = function (employees) {
  "use strict";
  // Write code under this line
  const values = Object.values(employees);
  const maxValue = Math.max(...values);
  const indexOfBest = values.indexOf(maxValue);
  const keys = Object.keys(employees);
  const bestEmployee = keys[indexOfBest];
  if (keys.length == 0) {
    return "";
  }
  return bestEmployee;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
//console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};

console.log(findBestEmployee(supports));
//console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));

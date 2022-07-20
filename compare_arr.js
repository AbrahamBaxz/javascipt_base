const arr1 = [
  { id: 1, name: "abra", age: 11 },
  { id: 2, name: "louis", age: 22 },
  { id: 4, name: "bacs", age: 33 },
];
const arr2 = [
  { id: 1, name: "abra", age: 11 },
  { id: 2, name: "louis", age: 22 },
  { id: 3, name: "bacs", age: 33 },
];

const cmprArr = (arr1, arr2) => {
  // check array lengths
  if (arr1.length !== arr2.length) return !1; //false

  // check if contents are the same
  let result = !0;
  for (let index = 0; index < arr1.length; index++) {
    const isIncluded = arr2.includes(arr1[index]);
    if (!isIncluded) {
      result = !1;
      break;
    }
  }
  return result;
};

const cmprArrObj = (arr1, arr2, property = "id") => {
  // ma
  arr1 = arr1.map((e) => e[property]);
  arr2 = arr2.map((e) => e[property]);

  // check array lengths
  if (arr1.length !== arr2.length) return !1; //false

  // check if contents are the same
  let result = !0;
  for (let index = 0; index < arr1.length; index++) {
    const isIncluded = arr2.includes(arr1[index]);
    if (!isIncluded) {
      result = !1;
      break;
    }
  }
  return result;
};

console.log(cmprArrObj(arr1, arr2, "id"));

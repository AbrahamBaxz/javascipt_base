import pkg from "lodash";
const { uniq, uniqBy } = pkg;

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

//console.log(cmprArrObj(arr1, arr2, "id"));

//____________________________________________________________

const emplyoee = [
  {
    name: "renzo",
    role: "tester",
  },
  {
    name: "johnren",
    role: "developer",
  },
  {
    name: "abraham",
    role: "manager",
  },
  {
    name: "gary",
    role: "tester",
  },
  {
    name: "clifford",
    role: "manager",
  },
  {
    name: "renzo",
    role: "????",
  },
];
//_______________________FIND_INDEX_________________
////1) Create a function which receives an Array of Numbers and search_value, return the indices that matches search value
//findValue([1,5,7,5], 5 ) ===> [1,3]

let randomArray = [1, 5, 7, 5];
let number = 5;

const findValue = (arr, num) => {
  return arr.reduce((acc, curr, index) => {
    if (curr === num) {
      acc = [...acc, index];
    }
    return acc;
  }, []);
};

console.log(findValue(randomArray, number));

//______________LETTER COUNTER__________________________________
//2) Given a string "ABCABCABCD" return "3A3B3C1D"
//fn("ABCABCABCD") ===> "3A3B3C1D"

let str = "AAABWDWF";
const fn = (str) => {
  const letters = [...str].reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
    return acc;
  }, {});

  return Object.keys(letters).reduce((str, curr) => {
    return (str += `${letters[curr]}${curr}`);
  }, "");
};
console.log(fn(str));

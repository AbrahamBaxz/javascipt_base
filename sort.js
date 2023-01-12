//let arr = [8, 6, 5, 2, 1];
// let arr = [5, 8, 6];

const { merge } = require("lodash");

// let loop = false;
// let i = 0;
// let temp = null;
// while (i < arr.length) {
//   if (arr[i] > arr[i + 1]) {
//     //swap
//     temp = arr[i];
//     arr[i] = arr[i + 1];
//     arr[i + 1] = temp;
//     loop = true;
//   }

//   if (i + 1 === arr.length && loop) {
//     // should loop back
//     i = -1;
//     loop = false;
//   }
//   i++;
// }

// console.log(arr);

// let i = 0;
// //let arr = [5, 4, 3, 2, 1];
// let arr = [676, 692, 80, 766, 389, 222, 703, 67, 465, 454, 45, 62, 274, 954, 632];
// let temp = null;
// while (i < arr.length) {
//   if (arr[i] > arr[i + 1]) {
//     for (let j = i + 1; j > 0; j--) {
//       if (arr[j - 1] > arr[j]) {
//         temp = arr[j];
//         arr[j] = arr[j - 1];
//         arr[j - 1] = temp;
//       }
//     }
//     temp = null;
//   }

//   i++;
// }

// console.log(arr);

const merge = (arr1, arr2) => {
  let arr3 = [];

  while (arr1.length) {}
};

const mergeSort = (arr) => {
  let arr1 = arr.slice(0, arr.length / 2);

  let arr2 = arr.slice(arr.length / 2, arr.length);

  arr1 = mergeSort(arr1);

  arr2 = mergeSort(arr2);

  return merge(arr1, arr2);
};

mergeSort([0, 8, 6, 5, 2, 1]);

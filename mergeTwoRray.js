const arr1 = [10, 21, 4, 23, 41, 15, 13];
const arr2 = [31, 38, 40, 22, 61];
arr3 = [];
for (i = 0; i < arr1.length; i++) {
  arr3.push(arr1[i]);
}
for (i = 0; i < arr2.length; i++) {
  arr3.push(arr2[i]);
}
// Optimised version
const arr4 = [10, 21, 4, 23, 41, 15, 13, 70];
const arr5 = [11, 18, 20, 22, 61];
const arr6 = [];
let a4 = 0;
let a5 = 0;
let a6 = 0;
while (a4 < arr4.length && a5 < arr5.length) {
  if (arr4[a4] < arr5[a5]) {
    arr6[a6] = arr4[a4];
    a4++;
  } else {
    arr6[a6] = arr5[a5];
    a5++;
  }
  a6++;
}
while (a4 < arr4.length) {
  arr6[a6] = arr4[a4];
  a4++;
  a6++;
}
console.log(arr6);

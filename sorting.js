// Bubble Sort
let arr = [12, 45, 11, 32, 6, 54, 48];
let temp;
for (i = 0; i < arr.length; i++) {
  for (j = 0; j < arr.length; j++) {
    if (arr[j] > arr[j + 1]) {
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);

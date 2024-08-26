let data = [20, 10, 15, 34, 25, 54];
let position = 3;
let newEl = 22;

for (let i = data.length; i > position; i--) {
  data[i] = data[i - 1];
}

data[position] = newEl;

// Deleting a element from an array at particular position

let data2 = [20, 10, 15, 34, 25, 54];
let pos = 2;

for (let i = pos; i < data2.length; i++) {
  data2[i] = data2[i + 1];
}

data2.length = data2.length - 1;
console.log(data2);

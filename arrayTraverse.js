let data = [20, 10, 15, 34, 25, 54];
let position = 3;
let newEl = 22;

for (let i = data.length; i > position; i--) {
  data[i] = data[i - 1];
}

data[position] = newEl;

console.log(data);

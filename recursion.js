// factorial(direct recursion)
const val = 5;
const fac = (n) => {
  if (n == 0) {
    return 1;
  }
  return n * fac(n - 1);
};

// Indirect-Recursion
const money = 100;
let totalApple = 0;
const buyApple = (x) => {
  if (x < 0) {
    console.log("i dont have money");
  } else {
    // console.log("I have", totalApple, "apple and", x, "money");
    buyMore(x);
  }
};
const buyMore = (x) => {
  totalApple++;
  buyApple(x - 10);
};
buyApple(money);

// Head and tail recursion
let data = 5;
const test = (x) => {
  // console.log(x) head recursion
  test(x - 1);
  // console.log(x) tail recursion
};

test(data);

// Reverse array usimg recursion
const arr1 = [12, 21, 5, 22, 51, 23];
let temp;
const customReverse = (data, start, end) => {
  if (start <= end) {
    temp = data[start];
    data[start] = data[end];
    data[end] = temp;
    customReverse(data, start + 1, end - 1);
  }
};

customReverse(arr1, 0, arr1.length - 1);
console.log(arr1);

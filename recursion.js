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
    console.log("I have", totalApple, "apple and", x, "money");
    buyMore(x);
  }
};
const buyMore = (x) => {
  totalApple++;
  buyApple(x - 10);
};
buyApple(money);

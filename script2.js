function repeatStr(n, s) {
  return s.repeat(n);
}
//
function check(a, x) {
  return a.includes(x);
}
//
function arithmetic(a, b, operator) {
  switch (operator) {
    case "add":
      return a + b;
      break;
    case "subtract":
      return a - b;
      break;
    case "multiply":
      return a * b;
      break;
    case "divide":
      return a / b;
      break;
  }
}
//Function 2 - squaring an argument
const square = (n) => n * n;
//
const arrayDiff = (a, b) => a.filter((item) => !b.includes(item));

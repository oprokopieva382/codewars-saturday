function persistence(num) {
  let i = 0;
  while (num.toString().length !== 1) {
    num = num
      .toString()
      .split("")
      .reduce((a, b) => a * b);
    i++;
  }
  return i;
}
//Beginner Series #3 Sum of Numbers
function getSum(a, b) {
  if (a === b) {
    return a;
  } else return a + b;
}
//
function getSum(a, b) {
  let count = 0;
  if (a == b) return a;
  if (a < b) {
    for (; a <= b; a++) {
      count += a;
    }
  } else if (a > b) {
    for (; b <= a; b++) {
      count += b;
    }
  }
  return count;
}
//Beginner Series #2 Clock
function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}

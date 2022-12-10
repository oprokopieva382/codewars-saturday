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
//
function removeEveryOther(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i += 2) {
    res.push(arr[i]);
  }
  return res;
}
//
function howMuchILoveYou(nbPetals) {
  let arr = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  for (let i = 0; i < nbPetals; i++) {
    arr.push(arr[i]);
  }
  return arr[nbPetals - 1];
}
//
function oddOrEven(array) {
  return array.reduce(function (sum, item) {
    return sum + item;
  }, 0) %
    2 ==
    0
    ? "even"
    : "odd";
}
//
var number = function (array) {
  return array.map((el, index) => `${index + 1}: ${el}`);
};
//
function rentalCarCost(d) {
  let dayCost = d * 40;
  if (d >= 7) {
    return dayCost - 50;
  } else if (d >= 3) {
    return dayCost - 20;
  } else return dayCost;
}

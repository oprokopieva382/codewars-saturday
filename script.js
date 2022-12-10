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
//
function isPalindrome(x) {
  const lowercaseInput = x.toLowerCase();
  const forward = lowercaseInput;
  const backward = lowercaseInput.split("").reverse().join("");
  return forward === backward;
}
//
function tribonacci(signature, n) {
  while (signature.length < n) {
    signature.push(signature.slice(-3).reduce(sum));
  }
  return signature.slice(0, n);
}

function sum(a, b) {
  return a + b;
}
//Grasshopper - Debug sayHello
function sayHello(name) {
  return "Hello, " + name;
}
//
function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/([^])\1+/g) || []
  ).length;
}
//
// function longestConsec(strarr, k) {
//   let arrLength = strarr.length;
//   let arr = [];

//   if (arrLength == 0 || k > arrLength || k <= 0) return "";

//   for (let i = 0; i <= arrLength - k; i++) {
//     let current = strarr[i];
//     for (let ii = k, jj = 1; ii > 1; ii--, jj++) {
//       current += strarr[i + jj];
//     }
//     arr.push(current);
//   }
//   return arr.reduce(function (a, b) {
//     return a.length > b.length ? a : a.length == b.length ? a : b;
//   });
// }

//shortest version
function longestConsec(strarr, k) {
  var longest = "";
  for (var i = 0; k > 0 && i <= strarr.length - k; i++) {
    var tempArray = strarr.slice(i, i + k);
    var tempStr = tempArray.join("");
    if (tempStr.length > longest.length) {
      longest = tempStr;
    }
  }
  return longest;
}

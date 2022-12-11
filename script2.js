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
//
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
//
function index(array, n) {
  if (array[n] == undefined) {
    return -1;
  } else {
    return array[n] ** n;
  }
}
//
const invert = (array) => array.map((num) => -num);
//
String.prototype.toJadenCase = function () {
  return this.replace(/(?:^|\s)\S/g, (word) => word.toUpperCase());
};
//
function findOdd(A) {
  let obj = {};
  for (let i = 0; i < A.length; i++) {
    obj[A[i]] = (obj[A[i]] || 0) + 1;
  }
  for (let key in obj) {
    if (obj[key] % 2 !== 0) {
      return Number(key);
    }
  }
}
//better option
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
//
function rps(p1, p2) {
  const rules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
  if (p1 === p2) {
    return `Draw!`;
  } else {
    return `Player ${rules[p1] === p2 ? 1 : 2} won!`;
  }
}
//
function wave(str) {
  let waveArr = [];
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (letter === " ") {
      continue;
    } else {
      waveArr.push(str.slice(0, i) + letter.toUpperCase() + str.slice(i + 1));
    }
  }
  return waveArr;
}
//
function getDivisorsCnt(n) {
  let output = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      output += 1;
    }
  }
  return output;
}
//
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

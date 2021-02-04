//1
function isEven(num) {
  return num % 2 === 0;
}
//2
function biggerAndOdd(num) {
  return num % 2 != 0 && num > 100;
}
//3
function greetPeople(age) {
  if (age >= 12 && age <= 19) return "Hi teenager";
  if (age === 25) return "Hi, I'm 25 too";
  return "Hello";
}
//4
function getLongest(arr) {
  let longest = 0;
  let result = "";
  arr.forEach((item) => {
    if (item.length > longest) {
      longest = item.length;
      result = item;
    }
  });
  return result;
}
// arr = ['The', 'ultimate', 'goal', 'is', 'to', 'be', 'like', 'water']
// console.log(getLongest(arr))

//5
function getStrings(arr) {
  const resultArr = [];
  arr.forEach((item) => {
    if (typeof item === "string") resultArr.push(item);
  });
  return resultArr;
}
// const arr = [1,'a', false, 'b']
// console.log(getStrings(arr))

//6
function mergeArrays(arr1, arr2) {
  let resultArr = [];
  resultArr = [...arr1];
  resultArr.splice(resultArr.length / 2, 0, ...arr2);
  return resultArr;
}

// let array1 = [0, 1, 2, 7, 8, 9]
// let array2 = [3, 4, 5, 6]
// console.log(mergeArrays(array1, array2))

//7
function canBeATriangle(a, b, c) {
  return a + b > c || a + c > b || b + c > a;
}
// console.log(canBeATriangle(100,10,10))

//8
function isPrime(num) {
  if (num > 1000) return "too big number";
  if (num === 0 || num === 1) return "neither prime nor composite";
  for (let i = 0; i < num; i++) {
    if (num % i === 0) return "compose";
    return "prime";
  }
}
// console.log(isPrime(15))

//9

function sayHi(obj) {
  if (obj.name && obj.age)
    return `Hi, my name is ${obj.name}, I am ${obj.age} years old.`;
  return "Hi, what is your name?";
}
// const obj = {
//     name: 'John',
//     age: 21
// }
// console.log(sayHi(obj))

//10
function piramid(height) {
  let row = "*";
  for (let i = 0; i < height; i++) {
    console.log(row);
    row += " *";
  }
}

// piramid(4)

//11
function sumOfBajanarars(num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) result += i;
  }
  return result;
}

// console.log(sumOfBajanarars(12))

//12
function phoneNumber() {
  const phoneBook = [];
  while (phoneBook[phoneBook.length - 1] != "stop") {
    addNumber();
  }

  function addNumber() {
    let input = null;
    while (!input) {
      input = prompt("Please, input a phone number.");
    }
    if ((!phoneBook.includes(input) && input[0] === "0") || input === "stop") {
      phoneBook.push(input);
      alert("Thank You");
    } else if (phoneBook.includes(input)) {
      alert("Phone number already exists");
    }
  }
  phoneBook.pop();
  return phoneBook;
}

// console.log(phoneNumber())

//13
function equalValues(arr1, arr2) {
  let count = 0;

  const mergeArr = [...arr1, ...arr2];
  const sortedMerge = mergeArr.sort();
  console.log(sortedMerge);
  const skip = [];
  for (let i = 0; i < mergeArr.length; i++) {
    if (
      !skip.includes(sortedMerge[i]) &&
      sortedMerge[i] === sortedMerge[i + 1]
    ) {
      skip.push(sortedMerge[i]);
      count++;
    }
  }

  return count;
}

// let arr1 = ["a","a","b","c","c"],
// arr2 = ["a","d","c","a","a"]

// let arr1 = [5]
// let arr2 = [5,5,5]

// console.log(equalValues(arr1, arr2))

//14
function commonLetter(arr) {
  let counts = {};
  let compare = 0;
  let mostFrequent;

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    if (counts[item] === undefined) {
      counts[item] = 1;
    } else {
      counts[item]++;
    }

    if (counts[item] > compare) {
      compare = counts[item];
      mostFrequent = arr[i];
    }
  }
  return mostFrequent;
}

// const arr = ['a','b','c','d', 'c']
// console.log(commonLetter(arr))

//15
function chessSquareColor(x, y) {
  if ((x + y) % 2 === 0) {
    console.log("square is white");
  } else {
    console.log("square is black");
  }
}
//  chessSquareColor(39,1024)

//16
function triangleArea(arr) {
  const a = Math.hypot(arr[0][0] - arr[1][0], arr[0][1] - arr[1][1]);
  const b = Math.hypot(arr[0][0] - arr[2][0], arr[0][1] - arr[2][1]);
  const c = Math.hypot(arr[1][0] - arr[2][0], arr[1][1] - arr[2][1]);
  const p = (a + b + c) / 2;

  const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  return Math.round(area);
}
// const arr = [
//   [1, 1],
//   [1, 3],
//   [3, 1],
// ];
// console.log(triangleArea(arr));

//17
function numberObj(arr) {
  let max = arr[0];
  let min = arr[0];
  let mean = arr.reduce((prev, next) => prev + next) / 2;
  let mode = modeF(arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }

  function modeF(arr) {
    let counts = {};
    let compare = 0;
    let mostFrequent;

    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];

      if (counts[item] === undefined) {
        counts[item] = 1;
      } else {
        counts[item]++;
      }

      if (counts[item] > compare) {
        compare = counts[item];
        mostFrequent = arr[i];
      }
    }
    return mostFrequent;
  }

  return {
    min,
    max,
    mode,
    mean,
  };
}

// const arr = [1, 2, 3, 45, 6];
// console.log(numberObj(arr));

//18
function lowerToUpperToLowercase() {
  let input = prompt("Please, enter a string.");
  if (input.length >= 20) {
    return input;
  } else {
    inputArr = input.split("");
    console.log(inputArr);
    const resultInput = [];
    inputArr.forEach((item, index) => {
      if (index % 2 == 0) {
        resultInput.push(item.toUpperCase());
      } else {
        resultInput.push(item.toLowerCase());
      }
      console.log(resultInput.join(""));
    });
  }
}
// lowerToUpperToLowercase()

//19
function factorial(num) {
  if (num > 20) return -1;
  let result = 1;
  while (num > 0) {
    result *= num;
    num--;
  }
  return result;
}
// console.log(factorial(5))

//20
function calculator() {
  let input = prompt("Please, enter something");
  let inputArr = input.split(" ");

  result = 0;
  switch (inputArr[1]) {
    case "+":
      result = +inputArr[0] + +inputArr[2];
      break;
    case "-":
      result = +inputArr[0] - +inputArr[2];
      break;
    case "*":
      result = +inputArr[0] * +inputArr[2];
      break;
    case "/":
      if (inputArr[2] === 0) console.log("ERROR");
      result = +inputArr[0] / +inputArr[2];
      break;
    default:
      return console.log("ERROR");
  }
  console.log(result);
}
// calculator()

//22
const isPalindrom = (str) => str === str.split("").reverse().join("");
// console.log(isPalindrom("madam"));

//23 solution was included

//24
function circle(r) {
  let area = Math.PI * Math.pow(r, 2);
  let diameter = 2 * Math.PI * r;
  return {
    area: area.toFixed(2),
    diameter: diameter.toFixed(2),
  };
}

// console.log(circle(5));

//25
function sortByYear(arr) {
  arr.sort((a, b) => {
    if (a.year > b.year) return 1;
    if (a.year < b.year) return -1;
    return 0;
  });
  return arr;
}

let articles = [
  {
    title: "Veganism",
    author: "Poghos",
    year: 2005,
  },
  {
    title: "Modern Philosophy",
    author: "Petros",
    year: 2019,
  },
  {
    title: "The Invention of the Internet",
    author: "Karapet",
    year: 1995,
  },
];

// console.log(sortByYear(articles));

//29
function calculateDistance(point1, point2) {
  return Math.hypot(point1.x - point2.x, point1.y - point2.y).toFixed(2);
}

let point1 = {
  x: 1,
  y: -4,
};
let point2 = {
  x: -1,
  y: 4,
};

// console.log(calculateDistance(point1, point2));

//30
function digitsCount(num) {
  let count = 0;
  while (num > 0) {
    count++;
    num = parseInt(num / 10);
  }
  return count;
}

// console.log(digitsCount(12112));

//31
function sortById(arr) {
  arr.sort((a, b) => {
    if (a.id > b.id) return 1;
    if (a.id < b.id) return -1;
    return 0;
  });
  return arr;
}

const arr = [
  {
    name: "Davit",
    id: 8,
  },
  {
    name: "Lina",
    id: 1,
  },
  {
    name: "Narine",
    id: 3,
  },
];

// console.log(sortById(arr));

//33
function mutateTheArray(arr) {
  const res = [];
  for (let i = 1; i < arr.length - 1; i++) {
    res.push(arr[i - 1] + arr[i + 1]);
  }
  return res;
}
console.log(mutateTheArray([4, 0, 1, -2, 3]));

//34
function getSymbolsCount(str, value) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === value) count++;
  }
  return count;
}
// console.log(getSymbolsCount("Ooo my god", "o"));

//35
function isFib(arr) {
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] == arr[i - 2] + arr[i - 1]) return true;
  }
  return false;
}
// console.log(isFib([1, 3, 5, 8, 235, 34, 5]));

//36
function checkSumEquality(arr) {
  let odd = 0;
  let even = 0;
  arr.forEach((item) => {
    if (item % 2 === 0) even += item;
    if (item % 2 !== 0) odd += item;
  });
  return even > odd;
}

// console.log(checkSumEquality([1, 3, 5, 8, 235, 34, 5]));

//37
function repeatString(str, num) {
  let res = "";
  while (num > 0) {
    res += str;
    num--;
  }
  return res;
}
// console.log(repeatString("foo", 10));

//38
const sum = function (a) {
  return function (b) {
    const result = a + b;

    return result;
  };
};

// console.log(sum(5)(7));

//39
const getDays = (seconds) => seconds / (24 * 3600);
// console.log(getDays(1728000));

//40
function myMap(arr, callback) {
  const res = [];
  arr.forEach((item) => res.push(callback(item)));
  return res;
}

// console.log(
//   myMap([1, 2, 3], function (num) {
//     return num * 2;
//   })
// );

//41
const getNegative = (num) => 0 - num;
// console.log(getNegative(10));

//42
function replaceNums(arr, value) {
  const res = [];
  arr.forEach((item) => (item % 3 === 0 ? res.push(value) : res.push(item)));
  return res;
}
// console.log(replaceNums([1, 2, 3], "foo"));

//43
function getFilledArray(value, length) {
  const res = [];
  while (length > 0) {
    res.push(value);
    length--;
  }
  return res;
}

// console.log(getFilledArray("str", 3));

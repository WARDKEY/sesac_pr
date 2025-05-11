let arr = [];

for (let i = 1; i <= 100; i++) {
  arr.push(i);
}

let sum1 = 0;
let sum2 = 0;
let sum3 = 0;

for (let i = 0; i < 100; i++) {
  sum1 += arr[i];
}

for (let num of arr) {
  sum2 += num;
}

arr.forEach((n) => (sum3 += n));

console.log(sum1);
console.log(sum2);
console.log(sum3);

let fruits1 = [
  "사과",
  "딸기",
  "파인애플",
  "수박",
  "참외",
  "오렌지",
  "자두",
  "망고",
];

let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

let same = [];
let diff = [];

for (let i = 0; i < fruits1.length; i++) {
  if (fruits2.includes(fruits1[i])) {
    same.push(fruits1[i]);
  }
}

for (let i = 0; i < fruits1.length; i++) {
  if (!fruits2.includes(fruits1[i])) {
    diff.push(fruits1[i]);
  }
}

console.log(same);
console.log(diff);

let day = new Date().getDay();

switch (day) {
  case 0:
  case 6:
    console.log("주말");
    break;
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("평일");
    break;
}

console.log(Math.floor(Math.random() * 11));

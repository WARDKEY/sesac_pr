for (let i = 0; i <= 10000; i++) {
  if (i % 13 == 0 && i % 2 != 0) {
    console.log(i);
  }
}

let num = prompt("숫자 입력 : ", 0);

for (let i = 0; i <= num; i++) {
  if (i % 13 == 0 && i % 2 != 0) {
    console.log(i);
  }
}

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

let sum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0 || i % 5 == 0) {
    sum += i;
  }
}

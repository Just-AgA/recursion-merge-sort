function fibs(num) {
  let result = [];

  let num1 = 0;
  let num2 = 1;
  let sum;
  let i;

  result.push(num1);
  result.push(num2);

  for (i = 2; i < num; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    result.push(sum);
  }
  return result;
}

function fibsRec(num) {
  if (num <= 0) return [];
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  const seq = fibsRec(num - 1);
  seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
  return seq;
}

console.log(`The 8th fibonacci element is ${fibs(8)}`);
console.log(`The 10th fibonacci element is ${fibs(10)}`);
console.log(`The 8th fibonacci element is ${fibsRec(8)}`);
console.log(`The 10th fibonacci element is ${fibsRec(10)}`);

function fibs(num) {
    let result = [];

    let num1 = 0;
    let num2 = 1;
    let sum;
    let i;

    result.push(num1);
    result.push(num2);

    for(i=2;i < num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        result.push(sum);
    }
    return result;
}


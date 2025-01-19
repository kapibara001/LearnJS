/*for (i=0; i<=100; i++) {
    document.write(i);
}

for (i=10; i>=1; i--) {
    document.write(i);
}
    

let sum = 0;
while (true) {
    let num = +prompt(`Введите число. Ваша сумма сейчас: ${sum}`)
    if (num == 0) {
        break;
    }
    sum += num;
}


let number = +prompt("Введите число, факториал которого хотите посчитать")
let fact = 1;
for (i = 1; i <= number; i++) {
    fact *= i;
}
alert(`!${number}: ${fact}`);


let max = Number.MIN_SAFE_INTEGER;
while(true) {
    if (max == Number.MIN_SAFE_INTEGER) {
        mynum = +prompt("Введите ваше первое число")
        max == mynum;
    }
    mynum = +prompt(`Максимальное число сейчас: ${max}. Введите число`)
    if (mynum > max) {
        max = mynum;
    }
}


let num_digitals = +prompt("Введите количество чисел, которое вы хотите ввести");
let count = 0;
for (let i = 1; i <= num_digitals; i++) {
    let digital = +prompt("Введите ваше число")
    if (digital == 0) {
        count++;
    }  
}
alert(`${count} нулей.`)


let abs = +prompt("Сколько чисел хотите ввести");
let counter_0 = 0, counter_poloj = 0, counter_minus = 0;
for (let i = 1; i <= abs; i++) {
    let digital2 = +prompt("Введите ваше число")
    if (digital2 == 0) 
        counter_0++;
    else if (digital2 < 0)
        counter_minus++;
    else
        counter_poloj++;
}
alert(counter_0 + " нулей, " + counter_poloj + " положительных чисел, " + counter_minus + " отрицательных чисел");


let celoe = +prompt("Введите максимально возможное число");
let sqrt_celoe = Math.sqrt(celoe)
let all = ""
for (let i = 1; i <= sqrt_celoe; i++) {
    all += `${i**2} `
}
alert(all);
*/


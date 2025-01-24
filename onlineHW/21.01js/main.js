// 1
/*{
    let age = +prompt("Введите ваш возраст");
    if (age > 0 && age <= 12) {
        document.write(`<p>Вы ребенок т.к вам ${age} лет</p>`);
    } else if (age > 12 && age <= 18) {
        document.write(`<p>Вы подросток</p>`);
    } else if(age > 18 && age <= 60) {
        document.write("<p>Вы взрослый</p>");
    } else {
        document.write("<p>Вы пенсионер</p>");
    }
}*/

//2
/*{
    let sym = +prompt("Введите цифру 0-9")
    switch(sym) {
        case 0:
            document.write(")");
            break;
        case 1:
            document.write("!");
            break;
        case 2:
            document.write("@");
            break;
        case 3:
            document.write("#");
            break;
        case 4:
            document.write("$");
            break;
        case 5:
            document.write("%");
            break;
        case 6:
            document.write("^");
            break;
        case 7:
            document.write("&");
            break;
        case 8:
            document.write("*");
            break;
        case 9:
            document.write("(");
            break;
    }
}*/

//3
/*{
    let num = prompt("Введите 3х значное число");
    if (num[0] == num[1] || num[0] == num[2]) {
        document.write(`Общая цифра в числе ${num}: ${num[0]}`);
    }
    else if (num[1] == num[2]) {
        document.write(`Общая цифра в числе ${num}: ${num[1]}`);
    }
    else {
        document.write(`Нет общих цифр в числе ${num}`);
    }
}*/

//4
/*{
    let year = +prompt("Введите год");
    if ( (year % 400 == 0) || (year % 4 == 0 && year % 100 !=0) ) 
        document.write("Год високосный");
    else {
        document.write("Год невисокосный");
    }
}*/

//5
/*{
    let num = prompt("Введите 5-значное число"); 
    //alert(num.slice(0,2)); alert(num.slice(-2));
    if ((num[1]+num[0]) == (num.slice(-2)))
        document.write("Палиндром");
    else 
        document.write("Не палиндром");
}*/

//6 
/*{
    let sum = parseFloat(prompt("Введите количество USD для перевода"));
    
    let EUR = sum*1.04;
    let UAN = sum*7.31;
    let AZN = sum*1.7;

    let convert_to = +prompt(`Введите, в какую валюту вы хотите перевести $${sum}:\n1) EUR\n2) UAN\n3) AZN`);

    switch(convert_to){ 
        case 1:
            document.write(`$${sum} в EUR: ${EUR}`);
            break;
        case 2:
            document.write(`$${sum} в UAN: ${UAN}`);
            break;
        case 3:
            document.write(`$${sum} в AZN: ${AZN}`);
            break;
    }
}*/

//7
/*{
    let sum = +prompt("Сумма покупки");

    if (sum >= 200 && sum < 300) 
        document.write(`Сумма оплаты с учетом скидки: ${sum*0.97}`);
    else if (sum >= 300 && sum < 500) 
        document.write(`Сумма оплаты с учетом скидки: ${sum*0.95}`);
    else if (sum >= 500)
        document.write(`Сумма оплаты с учетом скидки: ${sum*0.93}`);
}*/

//8 
/*{
    let ocr = +prompt("Введите длину окружности");
    let storona = +prompt("Введите длину стороны квадрата");

    let diametr = ocr / Math.PI;

    if (diametr < storona)
        document.write(`Окружность войдет в квадрат, так как диаметр равен ${diametr}, а сторона квадрата больше него и равна ${storona}`);
    else 
        document.write(`Окружнсть не войдет, так как диаметр равен ${diametr}, а сторона квадрата меньше него и равна ${storona}`);
}*/

//9 
/*{
    let question1 = +prompt("Вопрос 1: Сколько ног у паука?\n1) 10\n2) 8\n3) 6")
    let question2 = +prompt("Вопрос 2: Является ли Плутон планетой в современной науке?\n1) Да\n2) Нет");
    let question3 = +prompt("Вопрос 3: Сколько клеток в орагнизме человека?\n1) 10^8\n2) 10^12\n3) 10^15");

    let result = 0; 
    if (question1 == 2)
        result += 2;
    if (question2 == 2)
        result += 2 
    if (question3 == 3)
        result += 2

    if (result == 0) 
        document.write("0 очков. Передлайте");
    else if (result >= 2 && result < 6)
        document.write(`Результат удовлетворительный - ${result}`);
    else 
        document.write(`Результат замечательный - ${result}! Продолжайте в том же духе!`);
}*/

//10
{
    let day = +prompt("Какой номер дня в месяце?");
    let month = +prompt("Какой месяц?\n1) Январь\n2) Февраль\n3) Март\n4) Апрель\n5) Май\n6) Июнь\n7) Июль\n8) Август\n9) Сентярбрь\n10) Октябрь\n11) Ноябрь\n12) Декабрь");
    let year = +prompt("Какой год? (YYYY)");

    document.write("Сегодня ");
}
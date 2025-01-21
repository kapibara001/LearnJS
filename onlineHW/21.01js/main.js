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
{
    
}
/** Объект может быть создан с помощью фигурных скобок {…} с необязательным списком свойств. Свойство – это пара «ключ: значение», 
* где ключ – это строка (также называемая «именем свойства»), а значение может быть чем угодно.
*/ 
// let Object = new Object(); // Варианты создания объектов 
{
    let Object2 = {car: "Audi",}; // Обычно используют вариант с фигурными скобками {...}. Такое объявление называют литералом объекта или литеральной нотацией.

// Для обращения к свойствам используется запись «через точку»:
    console.log(Object2.car); // Audi

// Для удаления свойства мы можем использовать оператор delete:
    delete Object2.car;
};


// Чтобы добавить какое-то свойство, можно прописать его
{
    let user = {};
    user['liked birds'] = true;
    console.log(user['liked birds']) // true
}


// Имя свойства может состоять из нескольких слов, но тогда оно должно быть заключено в кавычки:
{
    let Object3 = {"Car name": "Audi"};
    // Обращение к имени(любые кавычки) 
    console.log(Object3['Car name']); // Audi
    delete Object3['Car name'];

    Object3.asd = true;
    console.log(Object3.asd); // true
}

// Квадратные скобки также позволяют обратиться к свойству, имя которого может быть результатом выражения. 
// Например, имя свойства может храниться в переменной:
{
    let userl = {};
    let key = 'like cars';
    userl[key] = false;
    console.log(userl[key]); // false
}


// ВЫЧИСЛЯЕМЫЕ СВОЙСТВА

// Мы можем использовать квадратные скобки в литеральной нотации для создания вычисляемого свойства.
{
    let fruit = "apple"; // В примере через alert(<вопрос>, "apple")
    let buylist = {
        [fruit]: 5,
    }
    // console.log(buylist.apple); 
    
    // По сути код выше работает как:
    let buylist1 = {}
    // let fruuit1 = prompt("Фрукт?", "apple");
    // buylist1[fruuit1] = 5;
    // console.log(buylist1.apple);
}

// с return'ом
{
    function makeUser(name, age) {
        // return {
        //     name: name,  
        //     age: age,
        // } Данный вид можно заменить следующим образом:
        return {
            name,  // name: name,
            age, // age: age,
        }
    }
    console.log(makeUser("maxim", 18).name); // maxim
}


//  При обращении к свойству, которого нет, возвращается undefined. Это позволяет просто проверить существование свойства:
{
    let user = {};
    console.log(user.noSuchParametrs === undefined); // true
}



//  Также существует специальный оператор "in" для проверки существования свойства в объекте.
//  Синтаксис оператора: "key" in object
{
    let user = {name: "Zina", age: 15};
    console.log("age" in user); // true
    console.log("isBot" in user) // false
}

// Цикл for..in
{
    let user = {
        name: "Jhon",
        age: 25,
        work: "freelance",
    }
    let inf;
    for (key in user) {
        inf += `${key}: ${user[key]}<br>`; // Если написать user.key - будет undefineded
    }
    // document.write(inf);
}


// Cвойства упорядочены особым образом: свойства с целочисленными ключами сортируются по возрастанию, остальные располагаются в порядке создания. Разберёмся подробнее.
{
    let Countries = {
        45: "Ru",
        41: "Sb",
        // ...
        1: "USA",
    }
    for (let country in Countries) {
        console.log(country);
    }
    // Чтобы избежать такой проблемы упорядочивание целочисленных параметров, можно добавить +(любой одинаковый знак для идентификации):
    let Countries1 = {
        "+45": "Ru", // работало бы также при том условии, если бы поменяли все + на -
        "+41": "Sb",
        // ....
        "+1": "USA",
    }
    for (let country in Countries1) {
        console.log(+country);
    }
}



// Задание 1
{
    function allInfoCar(Car, distance) {
        let info = "";
        for (let inf in Car) {
            info += (`${inf}: ${Car[inf]}<br>`);
        }

        let timeForDistanse = distance / Car["Averge speed"];
        let doptime = Math.floor(timeForDistanse / 4);
        timeForDistanse += doptime

        return { info, timeForDistanse, distance };
    }

    let Mercedes = {
        production: "Mercedes-Benz",
        model: "G63",
        year: 2024,
        "Averge speed": 90,
    }
    document.write(allInfoCar(Mercedes, 450).info + allInfoCar(Mercedes, 450).timeForDistanse + " часов на преодоление " + allInfoCar(Mercedes, 450).distance + " километров")
}

{ // Задание 2
    function del(a, b) {
        for (let i = 1; i < Math.min(a, b); i++) {
            if (a % i == 0 && b % i == 0) {
                a /= i;
                b /= i;
            }
        }
        return { a, b }
    }

    let chislitel = +prompt("Введите числитель");
    let znamenatel = +prompt("Введите Знаментель");

    let MathObject = {
        chislitel,
        znamenatel,
        plus: () => {return chislitel + znamenatel},
        minus: () => {return chislitel - znamenatel},
        mnoj: () => {return chislitel * znamenatel},
        delenie: () => {return chislitel/znamenatel},
    }

    document.write("<br>" + MathObject.plus() + " " + MathObject.minus() + " " + MathObject.mnoj() + " " + MathObject.delenie());
}
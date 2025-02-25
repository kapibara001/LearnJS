/**
 * Синтаксис JSON
 * {
 *      "firstName" : "Andrey",
 *      "lastName" : "Ivanov"
 *  }
 * 
 * JSON с вложеным объектом и массивом:
 * {
 *      "firstName" : "Andrey",
 *      "lastName" : "Ivanov",
 *      "age" : 20,
 *      "isStident" : true,
 *      "contactInfo" : { // Объект заключается в { ... } (фигурные скобки)
 *          "phone" : "090-555-666-1112",
 *          "email" : "AndreyIvanov@gmail.com",
 *      }
 *      "discipline" : [ // Массивы заключаются в квадратные скобки, в которых перечисляются значения
 *          "Programming", "Machine engineering", "English",
 *      ]
 * }
 * 
 * JSON не поддерживает: методы объекта(функциивнутри объекта), свойства объекта типа Symbol, свойства, которые являются undefined
 */ 


/** 
 * Для  работы  с  JSON  форматом  в  JavaScript  есть  объект JSON.
 * Объект JSON предоставляет две функции: 
 *      ■ stringify() — преобразует объекты в JSON(Серилизация - преобразование из JSON в нужный формат для работы); 
 *      ■ parse() — преобразует JSON в объект(Десерилизация - восстановление из n-формата в JSON).
 * 
 * Синтаксис функции stringify():
 *      JSON.stringify(value, [, replacer[, space]])
 */
{
    let user = {
        "FirstName" : "Nicolas",
        "LastName" : "Noise",
        "Age" : 20,
        "isStudent" : true,
        "ContactInfo" : {
            "Phone" : "098-192-999-9012",
            "email" : NaN,
        },
        "Disciplines" : [
            "Math", "History", "English",
        ]
    }

    let userInfo = JSON.stringify(user); // Применение JSON
    console.log(userInfo); // Вывод - все то, что находится в переменной user в том же виде
}
/* 
    Стоит отметить, что порядок свойств объекта может отличаться от порядка в полученной строке. 
    Функции,  значения  Symbol  или  undefined  не  сериализуются, а будут просто пропущены.
*/

/*
    Важно знать, что в сериализованном объекте не должно быть циклических ссылок.
    Циклическая ссылка — это ссылка, которая ссылается на другой объект, который в свою очередь ссылается на первый.
*/
{
    let Kate = {
        name: "Kate",
    }
    let Dave = {
        name: "Dave",
    }

    Kate.parent = Dave;
    Dave.child = Kate;

    // let badExample = JSON.stringify(Kate);
    // console.log(badExample); Вылезает ошибка - нельзя использовать циклическую ссылку
}

/* 
    Также функция может принять еще 2 необязательных параметра: replacer и space.
    Replacer -  параметр, который позволяет влиять на сериализацию объекта. Значением параметра 
    может быть функция, массив или null, если параметр не нужен.
*/
{
    let user = {
        "FirstName" : "Nicolas",
        "LastName" : "Noise",
        "Age" : 20,
        "isStudent" : true,
        "ContactInfo" : {
            "Phone" : "098-192-999-9012",
            "email" : NaN,
        },
        "Disciplines" : [
            "Math", "History", "English",
        ]
    }

    let userJSON = JSON.stringify(user, checkage); // Применение к JSON-объекту функции checkage

    function checkage(key, value) { // Значения по умолчанию
        if (key === "Age" && value >= 18) {
            return undefined;
        }
        return value;
    }

    console.log(userJSON); // В нашем случае поле "Age" будет "undefined", и в следствие чего поля Age не будет на экране.
}

/* 
    Если вторым аргументом в функцию JSON.stringify(value, replacer) передать массив, то значения массива будут со-
    поставлены со свойствами передаваемого объекта и если они совпадут то будут включены в преобразование, если 
    нет, то пропущены.
*/
{
    let user = {
        "FirstName" : "Nicolas",
        "LastName" : "Noise",
        "Age" : 20,
        "isStudent" : true,
        "ContactInfo" : {
            "Phone" : "098-192-999-9012",
            "email" : NaN,
        },
        "Disciplines" : [
            "Math", "History", "English",
        ]
    }
    
    let jsonPerson3 = JSON.stringify(user, ["FirstName", "LastName"]);
    console.log(jsonPerson3); // {"FirstName":"Nicolas","LastName":"Noise"}
}

/* 
    И  третий  параметр  в  функции  JSON.stringify(value, replacer, space) — это space, который принимает строку 
    или число и позволяет придать более читаемый вид строке JSON, добавляя отступы.
*/
{
    let user = {
        "FirstName" : "Nicolas",
        "LastName" : "Noise",
        "Age" : 20,
        "isStudent" : true,
        "ContactInfo" : {
            "Phone" : "098-192-999-9012",
            "email" : NaN,
        },
        "Disciplines" : [
            "Math", "History", "English",
        ]
    }

    console.log(user, null, 1) // Если бы у нас не было цифры, вывелось бы сплошным текстом. С цифрой вывелось также, как и объявлено(в таком же виде)
}


/* 
    Чтобы строку JSON преобразовать в объект, нужно выполнить над ней метод парсинга. Парсинг, в данном  
    случае, означает процесс десериализации строки в объект.

    Функция parse() — функция, которая десериализирует JSON строку и возвращает объект JavaScript.
    Синтаксис: JSON.parse(str, [reviver]);
*/
{
    let userStr = '{ "FirstName": "Nicolas", "LastName": "Noise", "Age": 20, "isStudent": true, "ContactInfo": { "Phone": "098-192-999-9012", "email": "" }, Disciplines": [ "Math", "History", "English" ] }';

    let userParse = JSON.parse(userStr);
    console.log(userParse.FirstName);
    console.log(userParse.ContactInfo.Phone);
}
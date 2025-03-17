// Установка TS
/*
    Для установки TS надо сначала установить node, затем глобально утановить компилятор TS:
        npm i -g typescript

    Проверка успешности установки TS:
        tsc -v

    Чтобы скомпелировать код из TS в JS, нужно просписать.
        tsc путь/До/Файла
    TypeScript автоматически создаст JS файл с таким же именем, как и файл TS.
    Чтобы включить автоматическую компиляцию js-файла, надо в конец добавить -w
        tsc путь/До/Файла -w

    Прикол TS заключается в том, что даже если в файле ts может быть ошибка, не факт, что она будет в
    скомпелированном файле js. То есть одразумевается то, что автор кода ts знает больше, чем сам ts.

    Для скачивания файла конфигурации нужно написать в консоли
        tsc -init
    Скачается файл с больщим количеством параметров для ts, которые можно менять под свои нуждны в ходе работы
*/
// Типы данных
/*
    В ts, в отличие от js, есть разделение на типы данных: типизация. Всего их, как и в js, 7 видов:
        -string
        -number
        -bigint
        -boolean
        -undefined
        -null
        -symbol

    В ts мы имеем возможность указать у переменной нужный нам тип данных через вид
        переменная: type = ...
    то есть можем объявлять тип или подписывать тип. Но заниматься этим не обязательно т.к ts сам может определить
    тип данных, но иногда это может понадобиться.
*/
// Массивы
{
    var names = ["Max", "Mike"]; // Оба означают то же самое
    var names2 = ["Maxim", "Makie"];
}
// Кортежи
{
    var userinfo = void 0;
    userinfo = ["Max", 1];
    // userinfo = [1, "Max"]; // Ошибка потому что мы задали, в каком порядке должны подаваться данные
}
// Тип enum
{
    /*
        В TypeScript enum — это специальный тип данных, предназначенный для хранения набора именованных констант.
        
        Когда использовать enum?
            -Когда есть фиксированный список значений (например, статусы заказа).
            -Когда значения могут использоваться в логике (например, проверки if).
            -Если важно сохранить читаемость кода, особенно при работе с API.
    
    
        По умолчанию присваивает числовые значения, начиная с 0. Но можно и задать начальное значение
        путем:
            переменная1 = 2;
    
    */
    var Season = void 0;
    (function (Season) {
        Season[Season["Winter"] = 6] = "Winter";
        Season[Season["Spring"] = 7] = "Spring";
        Season[Season["Summer"] = 8] = "Summer";
        Season[Season["Autumn"] = 9] = "Autumn";
    })(Season || (Season = {}));
    ;
    var time = Season.Spring;
    console.log(time);
    /*
        Такой enum - числовой. Но также можно сделать его числовым, смешанным, константным
    */
    var Statuss = void 0;
    (function (Statuss) {
        Statuss["New"] = "new2";
        Statuss["Old"] = "Old";
        Statuss["Start"] = "Start";
    })(Statuss || (Statuss = {}));
    var Stat = void 0;
    (function (Stat) {
        Stat["New"] = "New";
        Stat[Stat["Old"] = 2] = "Old";
    })(Stat || (Stat = {}));
    var forPrint = Statuss.New;
    console.log(forPrint);
}
// Объединения типов
{
    /*
        let id: number | string;
        id = "123";
        id = 123;
    */
    var id = "true";
    console.log(typeof id);
}
// Преобразования типов
{
    /*
        let someValue: any = "this is a string"; // type = any
        let someValueLenght: number = (<string>someValue).lenght;
    
        ИЛИ
    
        let somevalue: any = "this is a string"; // type = any
        let someValuelenght: number = (somevalue as string).lenght
    */
    var myString = "Привет! Меня зовут Максимка!";
    var stringLen = myString.length; // 28
    console.log(stringLen);
}
// Задание функций
{
    /*
        Как я понял, задание функций отличается чисто тем, что нужно указать тип данных,
        который функция будет возвращать
    */
    console.log(add(7, 15)); // 22
    function add(a, b) {
        return a + b;
    }
    /*
        Если наша функция ничего не возвращает, надо прописать то, что она возвращает тип
        данных void
    */
    print("Maxim!");
    function print(word) {
        console.log("Hello, ".concat(word.trim(), "!"));
    }
}
// Необязательные параметры в функции 
{
    /*
        После параметра функции, который может быть, но он не обязателен, ставится
        значок ?
    */
    getName("Вася", "Пупкин");
    getName("Вася");
    function getName(firstName, lastname) {
        if (lastname) {
            console.log("Hello, ".concat(firstName, " ").concat(lastname, "!"));
        }
        else {
            console.log("Hello, ".concat(firstName, "!"));
        }
    }
}

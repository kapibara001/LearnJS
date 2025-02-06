// Одно из фундаментальных отличий объектов от примитивов заключается в том, что объекты хранятся и 
// копируются «по ссылке», тогда как примитивные значения: строки, числа, логические значения и т.д. – 
// всегда копируются «как целое значение».

// Переменная, которой присвоен объект, хранит не сам объект, а его «адрес в памяти» – другими словами, «ссылку» на него.

{
    let user = { name: "Goi" };
    let copyUser = user; // Оба объекта теперь ССЫЛАЮТСЯ на одну и ту же переменную, но сам объект нее дублируется
    // Как вы можете видеть, все ещё есть один объект, но теперь с двумя переменными, которые ссылаются на него.
}

{ // Как копировать не надо
    let user = { 
        name: "John",
        age: 12,
    }

    let admin = user;
    admin.name = "Max";
    admin.age = 18;

    document.write(`Как копировать не надо:<br>Оригинал: ${admin.name}: ${admin.age}<br>"Копия": ${user.name}: ${user.age}<br><br>`); // Max: 18 Max: 18.
    // Получается мы изменили данные в user через admin? Такой способ копирования не подходит
}

{ // Правильное копирование
    let user = {
        name: "John",
        age: 16,
    };

    CloneUser = {}; // Само копирование
    for (let key in user) {
        CloneUser[key] = user[key];
    }
    CloneUser.name = "Max"; 

    document.write(`Правильное копирование: ${user.name}, ${CloneUser.name}<br><br>`); // John, Max. Видим, что теперь user и CloneUser - абсолютно разные, не связанные друг с другом объекты
}

{ // Сравнение по ссылке
    let a = {};
    let b = a; // копирование по ссылке

    // alert( a == b ); // true, обе переменные ссылаются на один и тот же объект
    // alert( a === b ); // true
}

{ // Использование метода Object.assign(dest, [src1, src2, src3...])
    // Первый аргумент dest — целевой объект.
    // Остальные аргументы src1, ..., srcN (может быть столько, сколько необходимо) являются исходными объектами
    // Метод копирует свойства всех исходных объектов src1, ..., srcN в целевой объект dest. Другими словами, свойства всех аргументов, начиная со второго, копируются в первый объект.
    // Возвращает объект dest.

    let user = { name: "Maxim" };
    let dop = { canView: "Yes, you can" };
    Object.assign(user, {["2 Arms"]: true+"<br>"}, dop); // Показал то, что можно объединять и заранее создавая для этого переменные, и без заранее созданных переменных

    document.write("Object.assign: " + user["2 Arms"]); // true
    document.write(user.canView + "<br><br>"); // true
}

{ // Копирование методом Object.assign(кудаДобавляем, чтоДобавляем1, чтоДобавляем2, ..., чтоДобавляемN)
    let user = {
        name: "Roma",
        age: 28,
        help: true,
    }

    let cloneUser = Object.assign({}, user); // "Дополнение пустого списка переменными из объекта user"
    cloneUser.name = "Alexey"; // Доказательство самостоятельности объектов
    
    document.write(`Object.assign({}, user): ${user.name}, ${user.age}, ${user.help}<br>${cloneUser.name}, ${cloneUser.age}, ${cloneUser.help}<br><br>`); // "Roma, 28, true" и "Alexey, 28, true"
}

{ // Копирование методом разложения объекта (clone = ${...user})
    // До сих пор мы предполагали, что все свойства user примитивныe. Но свойства могут быть и ссылками на другие объекты. Что с ними делать?
    let user = {
        name: "John",
        sizes: {
          height: 182,
          width: 50
        }
    };
    // alert( user.sizes.height ); // 182. 
    

    // Теперь недостаточно просто скопировать clone.sizes = user.sizes, потому что user.sizes – это объект, он будет скопирован по ссылке: 
    let user2 = {
        name: "John",
        sizes: {
          height: 182,
          width: 50
        }
    };

    let clone = Object.assign({}, user2);

    // alert( user2.sizes === clone.sizes ); // true, тот же объект
    // user и clone обладают общим свойством sizes
    user2.sizes.width++;       // изменяем свойства в первом объекте
    // alert(clone.sizes.width); // 51, видим результат в другом


    // Чтобы исправить это, мы должны использовать цикл клонирования, который проверяет каждое значение user[key] и, 
    // если это объект, тогда также копирует его структуру. Это называется «глубоким клонированием».
    let user3 = {
        name: "John",
        sizes: {
            height: 182,
            width: 50
        }
    };
    
    let cloneUser3 = {};
    for (let key in user3) {
        if (typeof user3[key] === "object" && user3[key] !== null) {
            // Копируем вложенный объект
            cloneUser3[key] = {};
            for (let key1 in user3[key]) {
                cloneUser3[key][key1] = user3[key][key1];
            }
        } else {
            // Копируем примитивные значения
            cloneUser3[key] = user3[key];
        }
    }

    let structedClone = structuredClone(user3); // Данный метод поддерживается только самыми современными браузерами
    structedClone.sizes.width = 121;
    
    // Проверяем копирование
    cloneUser3.sizes.height = 150;
    document.write(`Глубокое клонирование: ${user3.sizes.height}, ${cloneUser3.sizes.height}, ${structedClone.sizes.width}<br><br>`); // 182, 150
}

{ // Копирование через structuredClone(Object);
    // Данный метод поддерживается только самыми современными браузерами
    let user = { name: "MeMario!" };

    let cloneUser = structuredClone(user);
    cloneUser.name = "Vasiliy";

    document.write("structuredClone(user): " + cloneUser.name);
}
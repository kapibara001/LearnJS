{ // Map
    /**
     * Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа.
     * Основные методы и свойства:
     *  - new Map() – создаёт коллекцию.
        - map.set(key, value) – записывает по ключу key значение value.
        - map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
        - map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
        - map.delete(key) – удаляет элемент (пару «ключ/значение») по ключу key.
        - map.clear() – очищает коллекцию от всех элементов.
        - map.size – возвращает текущее количество элементов.
     */
    let map = new Map();

    map.set("1", "str1")    // строка в качестве ключа
       .set(1, "num1")      // цифра как ключ
    map.set(true, "bool1");  // булево значение как ключ
       // Можно писать map.set(key, value) на каждый добавляемый объект, а можно сделать цепочку вызовов

    // Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
    document.write(map.get(1) + "<br>"); // "num1"
    document.write(map.get("1") + "<br>"); // "str1"
    document.write(map.size + "<br>"); // 3
}

{ // set, get в Map
    // map[key] это не совсем правильный способ использования Map
    // Хотя map[key] также работает, например, мы можем установить map[key] = 2, в этом случаеmap рассматривался бы как обычный JavaScript объект, 
    // таким образом это ведёт ко всем соответствующим ограничениям (только строки/символьные ключи и так далее).
    // Поэтому нам следует использовать методы map: set, get и так далее.
    { // Пример через Map()
        let john = {
            name: "John",
        }
    
        let visitsCoinMap = new Map();
    
        visitsCoinMap.set(john, 123); // объект john - это ключ для значения в объекте Map. То есть записали объект john в качестве ключа и значение 123 в качестве значения
    
        document.write(visitsCoinMap.get(john) + "<br>"); // 123. (john: 123)
    }
    {   // Пример через Object {}
        let john = { name: "John "};
        let ben = { name: "Ben" };


        let visitsCoinMap2 = {};

        visitsCoinMap2[ben] = 123; // создали ("object Object": 123)
        visitsCoinMap2[john] = 234; // перезаписали "object Object"

        document.write(visitsCoinMap2["[object Object]"] + "<br>"); // 234
    }
}

{ // Перебор Map
    let shop = new Map([
        ["Огурец", 3000],
        ["Помидор", 2990],
        ["Лук", 100],
    ])
    
    for (let vegetable of shop.keys()) {
        document.write(vegetable); // ОгурецПомидорЛук
    }

    for (let price of shop.values()) {
        document.write(price); // 30002990100
    }

    for (let tovar of shop) {
        document.write(tovar); // Огурец,3000Помидор,2990Лук,100
    }
    document.write("<br>")
}


{ // Object.entries
    { // Object.entries: Map из Object
        let map = new Map([
            [1, "num1"],
            ["1", "str1"],
            [true, "bool1"],
        ])
    
        document.write(map.get(1)) // num1
        document.write(map.get("1")) // str1

        document.write("<br>")
    }
    { // Object.entries:(превращаем Object в Map)
        let obj = {
            name: "John",
            age: 30,
        }

        let map = new Map(Object.entries(obj));

        document.write(map.get('name') + "<br>")
    }
    { // Object.fromEntries (Превращаем в Object из Map)
        let prices = Object.fromEntries([
            ['banana', 1],
            ['orange', 2],
            ['meat', 4]
        ]);
          
          // prices = { banana: 1, orange: 2, meat: 4 }
        document.write(prices.orange + "<br>"); // 2


        let map = new Map();
        map.set('banana', 1)
           .set('apple', 12)
           .set ('orange', 3);

           let newObj = Object.fromEntries(map);
           
           // newObj = { banana: 1, orange: 2, meat: 4 }

        document.write(newObj.apple, typeof newObj); // 12object
    }
}
/* 
    Метод объекта RegExp "object/null exec(str)" имеет расширенные возвомжности 
    по сравнению с методом "test". "test" просто говорит, есть или нет нужный шаблон
    в строке, а "exec" говорит не только есть или нет, он еще и показывает, что есть 
    Также стоит учитывать то, что метод exec останавливается после первого обнаружения
    того, что мы пытаемся найти
*/
{
    let template = /\d+/;
    let str = "20% of population owning 80% income";
    console.log(template.exec(str));
    //['20', index: 0, input: '20% of population owning 80% income', groups: undefined]
    /*
    Под индексом [0] содержится первый найденный фрагмент, совпавший с шаблоном, то есть первое 
    число 20.
    Поле "index" содержит информацию о позиции найденного числа в строке. В нашем случае в самом начале - 0
    */
}

/*
    Но что если нам надо получить и следующие числа, которые нас интересуют? 
    В таком случае нам надо будет использоваться дополнительные условия поиска, кторые
    устанавливаются флагами. В нашем случае надо применить флаг "g". 
    После этого в ходе выполнения программы первый элемент, который мы нашли, как бы "удалится" из поиска
    и найдется следующий результат поиска. Имеет смысл делать так до тех пор, пока не выйдет значение null, 
    то есть ничего не найдено.
*/
{
    let template = /\d+/g;
    let str = "20% of population owning 80% income";
    console.log(template.exec(str)[0], template.exec(str), template.exec(str)  )
    // 20(личный эксп.) [... инфа про 80] null
}


/*
    Подобной с exec функциональностью обладает метод "object/null match(RegExp)" у объекта String
    
    "match" - также проверяет строку на соответвие шаблону, и, в зависимости от результатов проверки,
    возвращает объект с найденными фрагментами, либо "null". 
    У "exec" результаты поиска с "g" в шаблоне одинаковые, у "match" нет.
    
    Контекст у "match" как бы перевернутый, то есть 
        строка.match(шаблон)
*/
{
    let shablon = /\d+/;
    let shablonWithG = /\d+/g;
    let str = "20% of population owning 80% income";

    console.log(str.match(shablon)); // ['20', index: 0, input: '20% of population owning 80% income', groups: undefined]
    // Без флага match работат как exec

    console.log(str.match(shablonWithG)); // (2) ['20', '80']

    /* 
        Если нужно просто определенные результаты посика, лучше использоваться "match" без циклов и прочего.
        Если нужно найти полную информацию о том, что мы ищем, предпочтение стоит отдать методу "exec".
        Ну а если просто проверить есть или нет в этой строке этот шаблон, то можно обойтись просто методом 
        объекта RegExp "test"
    */
}

/* 
    Метод String "replace".
    Работает также до первого найденного совпадения. Это важно
*/
{
    let phoneNumber = "+7-982-611";
    console.log(phoneNumber.replace("-", "")); // +7982-611 - пропало только первое -
}
//Поэтому для поиска всех совпадений нужно также использовать регулярные выражния с флагом глобального поиска.
{
    let rightNumberTemplate = /[- ]/g; // ![]! поиск по тире(-) и пробелам(после тире пробел стоит)
    let phoneNumber = "+7-982-611-73-65";
    console.log(`Исправленный номер - ${phoneNumber.replace(rightNumberTemplate, "")}`)
    // Исправленный номер - +79826117365
}


/*
    Метод "split". Метод объекта String. Нужно для разбиения строки по определенному признаку/символу
*/
{
    str1 = "Smith John";
    str2 = "Smith, John";

    template = /\W+/; // Шаблон с символами, которые не применяются в обычных словах

    let newstr = str1.split(template); let newstrJoin = newstr.join(" "); // Эсперемент мой

    console.log(str1.split(template), str2.split(template), newstrJoin);
    //     (2) ['Smith', 'John']   (2) ['Smith', 'John']    'Smith John'
}

/* 
    Частоиспользуемый флаг "i" - регистронезависимый анализ шаблона. 
*/
{
    let str1 = "yes, i agree";
    let str2 = "YES!!!!";
    let str3 = "i think Yes";

    let template = /yes/i;
    console.log(template.test(str1), template.test(str2), template.test(str3));
    // true true true 
    console.log(template.test("good")); // false
}
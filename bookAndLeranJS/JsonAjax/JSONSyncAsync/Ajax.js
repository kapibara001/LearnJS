/*
    Очень часто нам нужно получить или отправить какие-либо данные с сервера. Это делается с помощью
    сетевых запросов. Запросы можно разделить на синхронные и асинхронные.


    Синхронные запросы - запросы, которые в ответ на запрос пользователя формируют овтет на сервере а потом
    ЦЕЛИКОМ отправляются на страницу/пользователю. Пока запрос выполняется на сервере, взаимодействие 
    клиента с клиентской частью останавливается(страница перестает откликаться на действия пользователя).
    Такие  запросы применяются, когда нам необязательно, чтобы пользователь имел возможность взаимодействовать 
    с интерфейсом страницы на время обработки запроса. Например, авторизация на сайте.


    Асинхронные запросы - запросы, которые отправляются пользователем на сервер и как только готово хоть
    что-то, это что-то отправляется сразу же на экран пользователю. Скрипт продолжает свою работу, что позволяет 
    пользователю продолжать взаимодействовать со страничкой.
    Асинхронные  запросы  используют  для  работы  с  большим  количеством  данных,  когда  запрос  будет  долгим,  
    и у пользователя должна быть возможность взаимодействовать со страницей
*/

/* 
    Ajax(Asynchronous JavaScript And XML) - технология взамодействия с сервером БЕЗ ПЕРЕЗАГРУЗКИ страницы.

    Сервер - место, где события обрабатываются, и куда поступают запросы клиента и откуда идут ответы пользователю.
    Сервер делится на локальный и удаленный сервер. Различие между ними в том, что 
    локальный сервер расположен на пк клиента, или просто имеет адрес http://127.0.0.1:5500.
    Удаленный сервер - мощный пк, как правило находящийся в отдельном помещении и доступ к нему осуществляется по сети.
*/

/* 
    Объект XMLHttpRequest.
    
    Для использования Ajax в JS используется специальный объект ActiveXObject.
    let request = ActiveXObject("Microsoft.XMLHTTP"); // Использование объекта ActiveXObject
*/

/*
    Но все современные браузеры имеют встроенный метод XMLHttpRequest, заменяющий ActiveXObject();
    let request = new XMLHttpRequest();

    Правильно будет создавать объект для запросов на оба случая(старый и современный):
*/
{ // Это кроссбраузерное решение, которое гарантирует, что запрос будет отправлен со всех браузеров
    let request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest()
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
}

/* 
    Но данный метод лишь подключает Ajax, но не отправляет никаких запросов.

    Для отправки запросов надо использовать open() и send().

    open() инициализирует, !!! НО НЕ ОТПРАВЛЯЕТ запрос !!! для дальнейшей отправки:
        open(methond, URL, [async, user, password]);
        где:
            -method - метод HTTP запроса. Обычно GET или POST, но есть и другие.
            -URL - ссылка на сайт, куда отправяется запрос(локальный или удаленный сервера - неважно).
            Далее идут необязательные параметры: 
                -async - указание того, будет ли запрос асинхронным или нет. По умолчанию стоит true.
                -user, -password - имя и пароль пользователя, если нужна аутентификация.


    Для отправки данных на сервер и используется метод send(). После оправки запрос обрабатывается
    на сервере, откуда затем идет ответ.

    Для получения ответа нужно подписаться на событие onreadystatechange у объекта запроса.
    В этом событии можно проверить состояние запроса через свойство readyState, которое говорит о том,
    на какой из 4 стадий находится запрос(возвращает цифру от 0 до 4).
    Событие onreadystatechange срабатывает каждый раз, когда readyState изменяется. 
    Ответ  сервера  на  запрос  можно  получить  через  свойство response
*/
{
    let request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    request.open("GET", "text.txt");
    request.onreadystatechange = function() {
        console.log(`ReadyState is ${request.readyState}`); // ReadyState is 2 / 3 /4
        // Цифры 0, 1 пропущены так как запрос уже был создан, инициализирован и отправлен
        if (request.readyState === 4) {
            console.log(request.responseType); // Возвращает тип возвращаемых данных. Примеры: "", "text", 
            // "arraybuffer" и "blob"(булевые зн), "document"(XML-документ), "json"(будет автоматически десериализован)

            console.log(request.statusText); // OK -(status 200) // Если бы было 404, значение будет "Not Found"
            
            // alert(request.response); // Вспылвает окошко с кодом страницы HTML, если не успешно, и "Hello World! File 
            // for Ajax JS", если все супер
        }
    }

    request.send();
}
/* 
    status 200 и request.readyState === 4 - запрос выполнен успешно и информация выведется на экран
    Ошибка 404 значит, чт ресурс не найден
*/
{
    // Пример с responseType, настроенным на JSON
    let request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    request.open("GET", "person.json");
    request.responseType = "json"; // УКАЗЫВАЕТСЯ ТИП json
    request.onreadystatechange = function() {
        if (request.status === 200) {
            console.log(`${request.readyState} этап пошел.`);
            if (request.readyState === 4) {
                let person = request.response;
                if (person.name === "Johnson") { 
                    console.log(person.name); // {name: 'Johnson', age: 23}
                }
                if (person.name === "Jonson") { // Не выведется т.к нет такого
                    console.log(person);
                }
            }
        }
    }

    request.send();
}

/* 
    responseXML - ответ в формате XML.
*/
{
    let request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    request.open("GET", "person.xml");
    request.onreadystatechange = function() {
        if (request.status === 200 && request.readyState === 4) {
            console.log(request.responseXML); 
            // Если мы хотим получить данные из xml файла в таком же виде, нужно использовать xml данные - (имя_запроса.responseXML),
            // т.к нет responseType'а, настроенного на xml, а если применить какой-то не тот responseType, будет выведено сообщение 
            // об ошибке
        }
    }

    request.send();
}
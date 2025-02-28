/*
   В предыдущем файле(JSONSyncAcync) мы использовали событие oneradystatechange для получения результата, 
   но есть более удачные способы это сделать.

   В XMLHttpRequest есть такие прекраные халявные методы onload, onloadend, onerror, onprogress и т.д.
   Но надо помнить, что эти все методы поддерживаются только в тех браузерах, где есть поддержка XMLHttpRequest.
   Для надежности рекомендуется использовать onreadystatechange, чтобы Ajax работал во всех брузерах 
*/

/*
   имя_запроса.onload()
   onload - Если нужно вызвать ТОЛЬКО ПРИ УСПЕШНОМ результате. ("Данные ЗАГРУЖЕНЫ"). 
   onloadend - Если нужно выполнить код ПРИ ЛЮБОМ исходе. ("Запрос ЗАВЕРШЕН") - выполнится позже onload
   
   Стоит применить это свойство и оно сработает только тогда, когда запрос завершился, а соотвественно
   пропадает надобность проверять readyState
*/
{
    let request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    request.open("GET", "person.json");
    request.onload = function() {
        if (request.status === 200) { 
            console.log(JSON.parse(request.response).name); // Maxim // Для красоты такую сложную строку написал
        }
    }

    request.send();
}

/* 
    onerror - вызывается в том случае, если запрос завершился некоректно.
    onprogress — периодически вызывается во время загрузки ответа. Можно использовать, 
        чтобы выводить информацию о прогрессе загрузки.
*/ 
{
    {
        let request;
        if (window.XMLHttpRequest) {
            request = new XMLHttpRequest();
        } else {
            request = new ActiveXObject("Microsoft.XMLHTTP");
        }
    
        request.open("GET", "person2.json");
        request.onloadend = function(event) {
            console.log(`Загружено ${event.loaded}`); // Maxim // Для красоты такую сложную строку написал
        }

        request.onload = function() {
            if (request.status === 404) {
                console.log("Файл не найден(ошибка 404)");
                alert(request.response)
            }
        }
        
        request.onerror = function() {
            alert("Ошибка");
        }

        request.send();
    }
}
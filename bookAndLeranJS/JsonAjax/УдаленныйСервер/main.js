/* 
    Запросы на удаленный сервер отправляются точно также, как и на локальный
*/
{
    let request;
    (window.XMLHttpRequest) ? request = new XMLHttpRequest : request = new ActiveXObject("Microsoft.XMLHTTP");

    request.open ("GET", 
                  "http://api.openweathermap.org/data/2.5/weather?q=Kiev&units=metric&APPID=b03a2cfad336d11bd9140ffd92074504")
                    // Отправка на сервер по управлению погодой
    request.onload = function() {
        if (request.status === 200) {
            let resultJSON = JSON.parse(request.response);
            console.log(resultJSON);
        }
    }

    request.onerror = function() {
        console.log("Ошибка");
    }

    request.send();

}
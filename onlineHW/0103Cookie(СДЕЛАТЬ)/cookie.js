// ЗАДАЧА: реализовать вспомогательные функции для работы с cookie:
// 1) установка cookie
// 2) получение значения cookie по ключу
// 3) удаление cookie

// setCookie - функция установки значения куки по заданному ключу
// вход: 
//  key - ключ куки (string); 
//  value - значение куки (string); 
//  expiresAfter - время жизни куки в минутах (number);
//  path - поддомен действия куки (string, по умолчанию '/')
// выход: -
function setCookie(key, value, expiresAfter, path='/') {
    // document.cookie = 'testKey=testValue; expires=Mon, 01 Jun 2024 08:12:00; path=/';
    // 1. получить текущее время
    let now = Date.now();  
    // 2. вычислить значение expires для куки
    let expires = new Date(now + expiresAfter * 60 * 1000).toUTCString();
    // 3. установить куки
    document.cookie = `${key}=${value}; expires=${expires}; path=${path}`;
}

// getCookie - функция получения значения куки по ключу
// вход: key - ключу куки (string)
// выход: значение куки по ключу key (string) если есть такой ключ, иначе null
function getCookie(key) {
    // 'isAuth=true; testKey=testValue'
    let cookies = document.cookie.split('; ');
    for (let keyValueString of cookies) {
        let delimiterIndex = keyValueString.indexOf('=');
        let cookieKey = keyValueString.substring(0, delimiterIndex);
        if (cookieKey === key) {    // если ключ совпал с искомым
            return keyValueString.substring(delimiterIndex + 1);
        }
    };
    return null;    // ничего не нашли
}

// removeCookie - функция удаления куки по ключу
// вход: key - ключу куки (string); path - поддомен действия куки (string, по умолчанию '/')
// выход: -
function removeCookie(key, path='/') {
    setCookie(key, '', -1, path);
}

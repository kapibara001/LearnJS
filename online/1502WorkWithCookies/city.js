// используемые константы
const CITY_COOKIE_NAME = "city_key";
const CITY_COOKIE_LIVETIME = 365 * 24 * 60;

// используемые DOM-элементы
const citySelect = document.getElementById("city");
const cityForm = document.getElementById("city-form");

// привязка загрузки городов к загрузке страницы
window.addEventListener("load", showCities);

// привязка обработчика отправки формы
cityForm.addEventListener("submit", (event)  => {
    // добавим город в cookie, при этом 
    // не будем прерывать обработку submit и 
    // пусть страница перезагрузится
    setCity(citySelect.value);
});

// getCity - поулчить текущий город
function getCity() {
    let cityKey = getCookie(CITY_COOKIE_NAME);
    if (cityKey === null) {
        // город не выбран - поставить по умолчанию
        cityKey = defaultCity();
        setCity(cityKey);
    }
    return cityKey;
}

// setCity - установка города в куки по ключу
function setCity(cityKey) {
    const cities = supportedCities();
    if (!(cityKey in cities)) {
        cityKey = defaultCity();    // установить по умолчанию
    }
    setCookie(CITY_COOKIE_NAME, cityKey, CITY_COOKIE_LIVETIME);
}

// showCities - вывод доступных городов
function showCities() {
    const cities = supportedCities();
    const city = getCity();
    for (let cityKey in cities) {
        let cityOption = document.createElement('option');
        cityOption.value = cityKey;
        cityOption.innerHTML = cities[cityKey];
        if (cityKey === city) {
            cityOption.selected = true;
        }
        citySelect.appendChild(cityOption);
    }
}

// defaultCity - получение города по умолчанию
function defaultCity() {
    return supportedCities().keys()[0];
}

// supportedCities - получение поддерживаемых городов в виде объекта
function supportedCities() {
    return {
        "moscow": "Москва",
        "petersburg": "Санкт-Петербург",
        "novosib": "Новосибирск",
        "barnaul": "Барнаул",
        "no": "Нет в списке"
    };
}


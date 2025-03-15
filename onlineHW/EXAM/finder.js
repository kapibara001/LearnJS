// Необходимые константы
const centerContent = document.getElementById("cenCont");
const searchBtn = document.getElementById("searchBtn");
const searchFiled = document.getElementById("searchText");

let request;
let response;
let append = [];


// Обработчик события нажатия кнопки "Найти"
searchBtn.addEventListener('click', (e) => {
    if (searchFiled.value.trim() !== "") { // Если у нас не пустая строка поиска
        if (/\d+/.test(searchFiled.value)) { // Поиск по OMDb ID 
            if (searchFiled.value < 9999999 && searchFiled.value > 0) {

                if (window.XMLHttpRequest) {
                    request = new XMLHttpRequest();
                } else {
                    request = new ActiveXObject("XMLHTTP");
                }

                response = `http://www.omdbapi.com/?i=tt${fixID(searchFiled.value)}&apikey=97a5fe93`;
                searchById(request, response);

            } else {
                alert("Такого OMDb ID не существует");
            }

        } else { // Поиск по имени
            if (window.XMLHttpRequest) {
                request = new XMLHttpRequest();
            } else {
                request = new ActiveXObject("XMLHTTP");
            }
            
            let filmName = searchFiled.value;
            // Поставить ограничение на минимальное количетсво симвволов 
            
            response = `http://www.omdbapi.com/?s=${filmName}&apikey=97a5fe93`;
            request.open('GET', response);

            request.onload = function() {
                if (request.status === 200) {
                    // console.log(request.response); // Успешно. Вид: {"Search": {}, {}, {}, ...}
                    let result = JSON.parse(request.response);
                    // console.log(result["Search"][1]["Title"]); // Выходят названия фильмов

                    for (let i = 0; i < result["Search"].length; i++) {
                        let omdbid = result["Search"][i]["imdbID"];
                        response = `http://www.omdbapi.com/?i=${omdbid}&apikey=97a5fe93`;
                        searchById(request, response);
                    }
                }
            }

            request.send();
        }

    } else {
        noVideo();
    }
})


// Функция на случай если видео не найдено
function noVideo() {
    alert("Такого фильма нет");
}

// Функция поиска по ID
function searchById(request, response) {
    request.open("GET", response);

    request.onload = function() {
        if (request.status === 200) {
            let result = JSON.parse(request.response); // Успешно
            createCardByIdFull(
                result['Poster'], result['Title'], result['Year'], 
                result['Rated'], result['Genre'], result['Director'],
                result['Actors'], result['Plot'], result['imdbID'],
            );
        }
    }

    request.send();
}

// Функция добавления карточки видео на экран
function createCardByIdFull(img, name, year, rated, genre, director, actors, info, imdb) {
    if (InListCheck(append, imdb)) {
        append.push(imdb);

        const classCard = document.createElement('div');
        classCard.className = 'card';

        const imgCard = document.createElement('div');
        imgCard.className = 'imgCard';

        const infoCard = document.createElement('div');
        infoCard.className = 'infoCard';

        const pInInfoCard = document.createElement('p');
        const spanInP = document.createElement('span');
        spanInP.className = 'infFilm';
        pInInfoCard.appendChild(spanInP);
        
        let appendImg = (img != "N/A") ? img : "apps/film-card.jpg" ;
        let imgElement = document.createElement('img'); // Создаём <img>
        imgElement.src = appendImg; // Присваиваем src
        imgCard.appendChild(imgElement); // Добавляем в imgCard


        let appendName = (name != "N/A") ? name : "Не определено" ;
        let appendYear = (year != "N/A") ? year : "Не определено" ;
        let appendRated = (rated != "N/A") ? rated : "Не определено";
        let appendGenre = (genre != "N/A") ? genre : "Не определено";
        let appendDirector = (director != "N/A") ? director : "Не определено";
        let appendActors = (actors != "N/A") ? actors : "Не определено";
        let appendInfo = (info != "N/A") ? info : "Не определено";

        classCard.appendChild(imgCard);
        infoCard.innerHTML = '<p style="margin: 5px 5px; font-size: 50px;">Информация о фильме</p>';
        infoCard.innerHTML += `<p><span class="infFilm">-Название: </span>${appendName}`;
        infoCard.innerHTML += `<p><span class="infFilm">-Год выпуска: </span>${appendYear}`;
        infoCard.innerHTML += `<p><span class="infFilm">-Рейтинг: </span>${appendRated}`;
        infoCard.innerHTML += `<p><span class="infFilm">-Жанр: </span>${appendGenre}`;
        infoCard.innerHTML += `<p><span class="infFilm">-Режисер: </span>${appendDirector}`;
        infoCard.innerHTML += `<p><span class="infFilm">-Актеры: </span>${appendActors}`;
        infoCard.innerHTML += `<p><span class="infFilm">-Описание: </span>${appendInfo}`;

        classCard.appendChild(infoCard);

        centerContent.appendChild(classCard);
    } else {
        alert('Данный фильм уже добавлен');
    }
}

// Функция проверки наличия фильма на странице путем проверки массива, в который каждый раз добавляется el в основном коде
function InListCheck(list, el) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] == el) {
            return false;
        }
    } 
    return true;
}

// Функция правильного построения OMDb ID
function fixID(num) {
    let numLen = String(num).padStart(7, '0');
    return numLen;
}
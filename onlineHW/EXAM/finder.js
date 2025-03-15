// Необходимые константы
const centerContent = document.getElementById("cenCont");
const searchBtn = document.getElementById("searchBtn");
const searchFiled = document.getElementById("searchText");
const isWord = document.getElementById("searchByKeyWord");

let request;
let response;


// Обработчик события нажатия кнопки "Найти"
searchBtn.addEventListener('click', (e) => {
    // Очистка списка
    const uslessCard = document.querySelectorAll('.card');
    if (uslessCard.length === 0){}
    else uslessCard.forEach(card => card.remove());

    if (searchFiled.value.trim() !== "") { // Если у нас не пустая строка поиска
        if (/\d+/.test(searchFiled.value)) { // Поиск по OMDb ID 
            if (searchFiled.value < 9999999 && searchFiled.value > 0) {
                
                request = Req();
                response = `http://www.omdbapi.com/?i=tt${fixID(searchFiled.value)}&apikey=97a5fe93`;
                searchById(request, response);

            } else {
                alert("Такого OMDb ID не существует");
            }

        } else if(isWord.checked) { // Поиск по имени (по слову)
            console.log("Поиск по отдельному слову");
            request = Req();
            
            const typeField = document.getElementById("typeVideo");
            const videoType = typeField.value;
            console.log(videoType);

            let filmName = searchFiled.value;

            if (filmName.length < 3) { // ограничение на минимальное количетсво символов 
                alert("Слишком короткое название");
            } else {
                response = checkTypeFilmS(filmName, videoType);
                request.open('GET', response);
    
                request.onload = function() {
                    if (request.status === 200) {
                        // console.log(request.response); // Успешно. Вид: {"Search": {}, {}, {}, ...}
                        let result = JSON.parse(request.response);
    
                        for (let i = 0; i < result["Search"].length; i++) {
    
                            request2 = Req();
    
                            let omdbid = result["Search"][i]["imdbID"];
                            response = `http://www.omdbapi.com/?i=${omdbid}&apikey=97a5fe93`;
                            searchById(request2, response);
                        }
                    }
                }

                request.send();
                }
            } else if (!isWord.checked) { // Поиск по полному названию
                console.log("Поиск по полному названию")
                request = Req();
            
                const typeField = document.getElementById("typeVideo");
                const videoType = typeField.value;
                console.log(videoType);

                let filmName = searchFiled.value;

                if (filmName.length < 3) { // ограничение на минимальное количетсво символов 
                    alert("Слишком короткое название");
                } else {
                    response = checkTypeFilmT(filmName, videoType);

                    request.open('GET', response);

                    request.onload = function() {
                        let result = JSON.parse(request.response);

                        request2 = Req();

                        searchById(request2, response);
                    }

                    request.send();
                }
            }

    } else {
        noVideo();
    }
})

function Req() {
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("XMLHTTP");
    } 
    return request;
}

function checkTypeFilmS(filmName, videoType) {
    if (videoType === "any") {
        return `http://www.omdbapi.com/?s=${filmName}&apikey=97a5fe93`;
    } else {
        return `http://www.omdbapi.com/?s=${filmName}&type=${videoType}&apikey=97a5fe93`;
    }
}
function checkTypeFilmT(filmName, videoType) {
    if (videoType === "any") {
        return `http://www.omdbapi.com/?t=${filmName}&apikey=97a5fe93`;
    } else {
        return `http://www.omdbapi.com/?t=${filmName}&type=${videoType}&apikey=97a5fe93`;
    }
}

// Функция на случай если видео не найдено
function noVideo() {
    alert("Такого фильма нет");
}

// Функция поиска по omdbID
function searchById(request, response) {
    request.open("GET", response);

    request.onload = function() {
        if (request.status === 200) {
            let result = JSON.parse(request.response); // Успешно
            createCardByIdFull(
                result['Poster'], result['Title'], result['Year'], 
                result['Rated'], result['Genre'], result['Director'],
                result['Actors'], result['Plot'], result['imdbID']
            );
        }
    }

    request.send();
}

// Функция добавления карточки видео на экран
function createCardByIdFull(img, name, year, rated, genre, director, actors, info) {
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
} 


// Функция правильного построения OMDb ID
function fixID(num) {
    let numLen = String(num).padStart(7, '0');
    return numLen;
}
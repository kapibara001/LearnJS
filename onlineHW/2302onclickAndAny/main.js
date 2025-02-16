{ // 1
    let rangeNum = document.getElementById('forRangeInput');
    let rangeLine = document.getElementById('rangeInput');

    // rangeNum.innerText =`Ваше значение: ${rangeLine.value}`;
}

// 2
{
    // Пак фотографий и индекс для работы с ними
    let photoPack = [
        "//upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/80px-HTML5_logo_and_wordmark.svg.png", 
        "//upload.wikimedia.org/wikipedia/commons/thumb/e/e4/HTML_logo.png/72px-HTML_logo.png", 
        "//upload.wikimedia.org/wikipedia/commons/thumb/1/10/HTML_element_content_categories.svg/220px-HTML_element_content_categories.svg.png",
    ];
    let currentIndexPhoto = 0;
    
    // Используемые переменные
    let photo = document.getElementById('photo');
    let imgPhoto = document.createElement('img');
    let nextBtn = document.getElementById('nextPhoto');
    let backBtn = document.getElementById('backPhoto');

    // Необходимые автоматические запуски функций при загрузке страницы
    printPhoto();
    checkFirstOrLastPhoto();

    // Отображение картинки
    function printPhoto() {
        imgPhoto.src = photoPack[currentIndexPhoto];
        photo.appendChild(imgPhoto);
    }

    // Кнопка "вперед"
    function plusPhoto() {
        if(photoPack[currentIndexPhoto+1] !== photoPack[photoPack.length]) {
            currentIndexPhoto++;
            printPhoto();
            
            checkFirstOrLastPhoto();
        } else {}
    }

    // Кнопка "назад"
    function minusPhoto() {
        if (photoPack[currentIndexPhoto] !== photoPack[0]) {
            currentIndexPhoto--;
            printPhoto();

            checkFirstOrLastPhoto();
        } else {}
    }

    // Проверка на первое или последнее фото. Да - делаем прозрачным текст
    function checkFirstOrLastPhoto() {
        if (photoPack[currentIndexPhoto+1] === photoPack[photoPack.length]) {
            nextBtn.style.color = 'rgba(0, 0, 0, 0.3)';
        } else if (photoPack[currentIndexPhoto] === photoPack[0]) {
            backBtn.style.color = 'rgba(0, 0, 0, 0.3)';
        } else {
            nextBtn.style.color = 'rgba(0, 0, 0, 1)';
            backBtn.style.color = 'rgba(0, 0, 0, 1)';
        }
    }

    // Функции кнопок "вперед" и "назад" при нажатии
    nextBtn.addEventListener('click', plusPhoto);
    backBtn.addEventListener('click', minusPhoto)
}

//3 
{
    // Используемые переменные/константы
    let headersForHidenText = document.getElementsByClassName("headerPad");
    let hidenText = document.getElementsByClassName("parText");
    let currentOpenBlock = null;

    let forOpen = new Map();
    for (let i = 0; i < headersForHidenText.length; i++) {
        forOpen.set(headersForHidenText[i], hidenText[i]);
    }

    for (let i = 0; i < headersForHidenText.length; i++) {
        headersForHidenText[i].addEventListener('click', () => openText(i));
    }


    // Функция открытия блока
    function openText(index) {
        let textBlock = forOpen.get(headersForHidenText[index]);
    
        if (!textBlock) {
            return;
        }

        // Если уже есть открытый блок, закрываем его
        if (currentOpenBlock && currentOpenBlock !== textBlock) {
            currentOpenBlock.style.display = "none";
        }
        
        // Переключаем отображение текущего блока(для открытия)
        textBlock.style.display = textBlock.style.display === "none" ? "block" : "none";
        
        // Обновляем текущий открытый блок (если закрыли текущий, сбрасываем переменную)
        currentOpenBlock = textBlock.style.display === "block" ? textBlock : null;
    }
}
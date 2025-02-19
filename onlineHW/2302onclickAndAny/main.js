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

{ // 4
    // Используемые переменные
    let creatingTextParagraph = document.getElementById("scrollText");
    let addTextBtn = document.getElementById("addScrollText");
    let clickAddBtnCounter = 0;


    // Формирование списка с текстом для задания
    let text = new Map();

    let p1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    let p2 = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
    let p3 = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.";

    text.set("p1Text", p1)
        .set("p2Text", p2)
        .set("p3Text", p3);
    

    addTextBtn.addEventListener('click', clickAddTextBtn);

    // Функция нажатия на кнопку добавить текст
    function clickAddTextBtn() {
        if (clickAddBtnCounter+1 < text.size) {
            checkTextForContinue();
        } else {
            checkTextForContinue();
            addTextBtn.style.display = "none";
        }
    }
    
    // Функция добавления параграфа блок
    function checkTextForContinue() {
        clickAddBtnCounter++;
        let paragraphCreate = document.createElement('p');
        paragraphCreate.innerText = text.get(`p${clickAddBtnCounter}Text`);
    
        creatingTextParagraph.appendChild(paragraphCreate);
    }
}


{ // 5

}


{ // 6
    // Используемые переменные
    let links = [
        "ibdex.html", "http://google.com", "https://listep.org", "https://mystat.itstep.org", ".apps/html2.jpg", "IWantPizza",
    ];
    let linkCont = document.getElementById('linkList');

    // Формирование и отрисовка ссылки и ее текста на экране
    for (let i = 0; i < links.length; i++) {
        let liForLink = document.createElement('li')
        let create = document.createElement('a');
        create.href = links[i];
        create.innerText = links[i];

        if (!create.innerHTML.startsWith("http")) {
            create.style.textDecoration = "none";   
        } else {
            create.style.textDecorationStyle = "dotted";
            create.style.textUnderlinePosition = "under";
        }

        liForLink.appendChild(create);
        linkCont.appendChild(liForLink);
    }
}


{
    
}
{ // 1 
    let fatherElement = document.createElement('div');
    fatherElement.id = 'forParagraph';
    document.body.appendChild(fatherElement);

    let element = document.getElementById('forParagraph');
    let Paragraph = document.createElement('p');

    Paragraph.innerText = "1) Привет Мир!";
    element.appendChild(Paragraph);
}

{ // 2, 3, 4
    let forChange = document.getElementById("myElement");
    forChange.innerText = "2.1) Новый текст";
    
    forChange.style.backgroundColor = "blue"; // 3
    
    // forChange.remove(); // 4
    
    // debugger;
    // let forChangeClone = 
    
    let forChangeClass = document.getElementsByClassName("generalClass");
    for (let i = 0; i < forChangeClass.length; i++) {
        document.getElementsByClassName("generalClass")[i].innerText = "2.2) Измнененный текст"
        document.getElementsByClassName("generalClass")[i].style.backgroundColor = "red"; // 3
        // document.getElementsByClassName("generalClass")[i].remove(); // 4
    }
}

{ // 5
    let elem = document.getElementById("myElement");

    // let clone = Object.assign(elem);
    let clone = elem.cloneNode(true); // копируемныйЭлемент.cloneNode(true/false)

    document.body.appendChild(clone);
}

{  // 6
    let element = document.getElementById("myElement");
    element.setAttribute("data-custom", "newValue"); // Добавление атрибута data-custom со значением newValue

    let myClass = document.getElementsByClassName("generalClass");
    for (let i = 0; i < myClass.length; i++) {
        myClass[i].setAttribute("data-new", "added");
    }
}

{ // 7
    let elemts = document.getElementById("myElement");
    document.body.prepend(elemts); // prepend - добавление в начало документа

    let createDivConateiner = document.createElement('div');
    createDivConateiner.id = "container";
    document.body.appendChild(createDivConateiner);

    let classGeneralClass = document.getElementsByClassName("generalClass");
    for (let i = 0; i < classGeneralClass.length; i++) {
        document.getElementById("container").appendChild(classGeneralClass[i]);
    }
}
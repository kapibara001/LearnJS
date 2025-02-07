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
    
}
{
    let fatherElement = document.createElement('div');
    fatherElement.id = 'forParagraph';
    let element = document.getElementById('forParagraph');
    let Paragraph = document.createElement('p');

    Paragraph.appendChild("Привет Мир!");
    element.appendChild(Paragraph);
}
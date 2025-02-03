function printTime() {
    const nowDate = new Date();

    const timeMoskow = document.getElementById("moscowTime"); 
    nowDate.setHours(nowDate.getHours() - 2);
    timeMoskow.innerText = nowDate.toLocaleDateString() + " " + nowDate.toLocaleTimeString();

    const timeSverdlovsk = document.getElementsByClassName("sverdlOblast")[0]; // Поиск элемента по названию класса. Образует массив(класс не уникален), поэтому обращаемся по индексу
    nowDate.setHours(nowDate.getHours() + 2);
    timeSverdlovsk.innerText = nowDate.toLocaleDateString() + " " + nowDate.toLocaleTimeString();

    const timeKalingrad = document.querySelector("td[locale-time=\"Kaliningrad\"]") // Работа через какой-то атрибут, который есть в объекте HTML
    nowDate.setHours(nowDate.getHours() - 3);
    timeKalingrad.innerText = nowDate.toLocaleDateString() + " " + nowDate.toLocaleTimeString();
}

// printTime();
// setTimeout(printTime, 1500); // Появление дат и времени через полторы секунды
setInterval(printTime, 1000);
const tbody = document.getElementsByTagName('tbody')[0];

    const tr = document.createElement("<tr>");
    const td = document.createElement("<td>");

    tr.innerText = '<td>New York</td>';
    tr.appendChild(td);

    nowDate.setHours(nowDate.getHours() - 5);
    td.innerText = nowDate.toLocaleTimeString();

    tbod.appendChild(tr);

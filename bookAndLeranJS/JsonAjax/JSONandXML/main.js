let person = {
    "name": "Maxim",
    "lastname": "Sokolov",
    "age": 102,
    "city-born": "Yekaterinburg",
    "city-live": "NY",
}

let requset = (XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");


let personJSON = JSON.stringify(person);

requset.open("POST", "server.php");
requset.setRequestHeader("('Content-Type', 'application/json");

requset.send(personJSON);
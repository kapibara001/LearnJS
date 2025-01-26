// Объекты в JS - массив, содержащий поля и методы, их обрабатывающие 

/* Способ ( паттерн ) задания объектов: 
let obj = {
    'key1': 'value1',
    'key2': 'value2',
} */

let weight = 75;
const user = {
    'Name': 'Maxim',
    'age': 18,
    weight, // 'weight': 75
}

document.write(user.Name + " " + user['age'] + "<br>") // Пример обращенеия 

user['Name'] = "Nikolay"; // Перезапись значения объекта
user.age = 25; 
document.write(user.Name + " " + user['age'] + "<br>");


//      Копирование 
let newu = {...user}; 
document.write(newu.Name + " " + newu.age + "<br>");
let fakeCopyUser = user; // НЕ КОПИРОВАНИЕ, а ссылка на объект


//      Функции внутри объектов
const admin = {
    name: 'admin',
    toString5() {
        return `name: ${this.name}`
    },
    // toString2: function() { // Можно и так, но лучше применять метод из 32 строки
    //     return `name: ${this.name}`
    // }
}
document.write(admin.toString5());
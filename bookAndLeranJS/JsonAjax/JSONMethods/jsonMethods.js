/* \
    Метод toJSON() может быть методом любого объекта. Он позволяет определить собственное представление объекта в JSON. 
    Таким образом, можно заменить стандартное  поведение  сериализации  на  собственное.  Функция stringify() будет вызывать метод 
    объекта toJSON() и использовать  возвращаемое  значение,  вместо  того  чтобы сериализовать переданный объект.

    Применяется,  если  объект  JavaScript  может  содержать некорректные значения, которые нарушают сери-ализацию. 
*/
{
    let model = {
        name: "BMW", 
        autopilot: undefined
    }

    let car = {
        color: "Black",
        date: new Date(2025, 2, 26),
        model,
    }

    console.log(JSON.stringify(car, null, 1)); // Не отобразится autopilot и его значение
}

/* 
    Чтобы это исправить, можно использовать метод toJSON() и самостоятельно 
    отконтролировать объекты со значением undefined
*/
{
    let model = {
        name: "BMW", 
        autopilot: undefined,
        toJSON() {
            return {
                name: this.name,
                autopilot: this.autopilot === undefined ? "Not" : this.autopilot
            }
        }
    }

    let car = {
        color: "Black",
        date: new Date(2025, 2, 26),
        model,
    }

    let printCar = JSON.stringify(car, null, 4);
    console.log(printCar);
}


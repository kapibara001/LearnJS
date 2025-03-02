/** @type {HTMLCanvasElement} определяем тип переменной - JSDoc*/
const canvas = document.getElementById("paint");
const ctx = canvas.getContext("2d"); // Без 1 строки не было бы getContext в подсказках

{ // Общие параметры
    ctx.lineWidth = 10; // установка толщины контура
    ctx.lineJoin = "round" // закругленные края
    ctx.globalAlpha = 0.7; // Прозрачность
    
    // Нарисовали квадрат
    ctx.fillStyle = "black";
    ctx.fillRect(10, 10, 100, 100); // fillRect() - закрашенная фигура. (x, y, размер_х, размер_у)
    
    ctx.strokeRect(70, 70, 100, 50); // strokeRect() - незакрашенная фигура. (x, y, размер_х, размер_у)
    
    
    ctx.fillRect(250, 0, 250, 400);
    ctx.clearRect(450, 175, 50, 50); // clearRect() - очистить область
}

{ // Рисуем окружность
    ctx.beginPath(); // Точка, на которой мы остановились, обозначаем ее этой командой. Нужно перед рисовкой линии
    ctx.lineWidth = 1;
    ctx.lineJoin = "round";

    ctx.arc(
        50, // Координата центра по Х
        50, // Координата центра по y
        50, // Радиус
        0, // Начальный угол в радианах
        Math.PI, // Конечный угол в радианах
        true // если true - дуга будет выпуклой вверх, если false - вниз
    )

    ctx.lineTo(100, 130); // Просто перемещаем точку в координату (x, y), и она оставляет за собой след - просто риусем линию с концов в этих координатах
    ctx.lineTo(200, 50);

    ctx.arc(
        150, 
        50, 
        50, 
        0, 
        Math.PI, 
        true 
    )

    ctx.closePath(); // Возвращаем точку в место, где она началась - beginPath()
    ctx.stroke(); // Отрисовка линии (без заливки)
}

{
    /** @type {HTMLCanvasElement} */
    const elCanvas = document.getElementById("canvas-animation");
 
    const ctx = elCanvas.getContext('2d');
 
    document.getElementById('range-inp').addEventListener(
        'input', 
        (e) => {
            ctx.clearRect(0, 0, elCanvas.width, elCanvas.height);
 
            const value = +e.target.value;
            const maxValue = +e.target.max;
 
            const angle = value / maxValue * Math.PI * 2;
 
            ctx.beginPath();
            ctx.fillStyle = 'green';
            ctx.arc(
                100, 
                100,
                100,
                0, 
                angle
            )
            ctx.lineTo(100, 100);
            ctx.fill();
            ctx.stroke();
 
            ctx.beginPath();
            ctx.fillStyle = 'red';
 
            ctx.arc(
                100, 
                100,
                100,
                angle, 
                Math.PI * 2
            )
            ctx.lineTo(100, 100);
            ctx.fill();
            ctx.stroke();
 
        }
    )
}
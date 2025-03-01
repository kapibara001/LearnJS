/* 
    
*/
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.lineWidth = 10; // установка толщины контура
ctx.lineJoin = "round" // закругленные края
ctx.globalAlpha = 0.7; // Прозрачность

// Нарисовали квадрат
ctx.fillStyle = "black";
ctx.fillRect(10, 10, 100, 100); // fillRect() - закрашенная фигура. (x, y, размер_х, размер_у)

ctx.strokeRect(70, 70, 100, 50); // strokeRect() - незакрашенная фигура. (x, y, размер_х, размер_у)


ctx.fillRect(250, 0, 250, 400);
ctx.clearRect(450, 175, 50, 50); // clearRect() - очистить область

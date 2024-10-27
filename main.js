// Task 2
// Configure the JavaScript for Drawing Context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let isDrawing = false;
let startX = 0;
let startY = 0;

canvas.addEventListener('mousedown', (mouse) => {
    isDrawing = true;
    startX = mouse.offsetX;
    startY = mouse.offsetY;
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

canvas.addEventListener(mousemove, () => {

});

const colorPicker = document.getElementById('colorPicker'); 
colorPicker.addEventListener('input', (mouse) => {
    selectedColor = mouse.target.value;
});


const clearButton = document.getElementById('clearCanvas'); 
clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
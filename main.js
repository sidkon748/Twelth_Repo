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

canvas.addEventListener('mousemove', (mouse) => {
    if (!isDrawing) return;
    ctx.strokeStyle = selectedColor; 
    ctx.lineWidth = 5; 
    ctx.lineJoin = 'round'; 
    ctx.beginPath(); 
    ctx.moveTo(startX, startY); 
    ctx.lineTo(mouse.offsetX, mouse.offsetY); 
    ctx.stroke(); 
    startX = mouse.offsetX; 
    startY = mouse.offsetY;

    // Task 3
    // Implement color selection and canvas clearing functionality.
    if (selectedShape === 'line') {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(mouse.offsetX, mouse.offsetY);
        ctx.stroke();
    } else if (selectedShape === 'rectangle') {
        ctx.strokeRect(startX, startY, mouse.offsetX - startX, mouse.offsetY - startY);
    } else if (selectedShape === 'circle') {
        const radius = Math.sqrt(Math.pow(mouse.offsetX - startX, 2) + Math.pow(mouse.offsetY - startY, 2));
        ctx.beginPath();
        ctx.arc(startX, startY, radius, 0, Math.PI * 2);
        ctx.stroke();
    }
});

// Task 4
// Implement color selection and canvas clearing functionality.
const colorPicker = document.getElementById('colorPicker'); 
colorPicker.addEventListener('input', (mouse) => {
    selectedColor = mouse.target.value;
});
const clearButton = document.getElementById('clearCanvas'); 
clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
let canvas = document.getElementById("myCanvas");
let rubber = document.querySelector('.clear');
let ctx = canvas.getContext('2d');
let isdrawing = false;
let x = 0;
let y = 0;

canvas.addEventListener('mousedown', (e) => {
    x = e.offsetX;
    y = e.offsetY;
    isdrawing = true;
})
canvas.addEventListener('mousemove', (e) => {
    if (isdrawing == true) {
        draw(x, y)
        x = e.offsetX
        y = e.offsetY
    }
})

canvas.addEventListener('mouseup', () => {
    if (isdrawing == true) {
        draw(x, y)
        x = 0;
        y = 0;
        isdrawing = false;
    }
})

rubber.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

function draw(x, y) {
    let DrawingValue = document.querySelector('.number-type').value;
    let ColorValue = document.querySelector('.Color-type').value;
    ctx.beginPath()
    ctx.arc(x, y, DrawingValue, 0, 2 * Math.PI);
    ctx.fillStyle = ColorValue;
    ctx.strokeStyle = 'transparent';
    ctx.fill();
    ctx.stroke();

}
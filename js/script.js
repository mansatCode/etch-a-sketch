const DEFAULT_SIZE = 16;
const COLOUR = 1;
const RAINBOW = 2;
const ERASER = 3;
const DEFAULT_COLOUR = "#000000";

let penColour = DEFAULT_COLOUR;
let penMode = COLOUR;
let isMouseDown = false;

const body = document.body;
const clearBtn = document.getElementById('clear');
const rainbowBtn = document.getElementById('rainbowMode');
const colourBtn = document.getElementById('colourMode');
const eraserBtn = document.getElementById('eraserMode');
const colourPicker = document.getElementById('colourPicker');

function generateGrid(gridSize) {
    // console.log("Resizing grid: " + gridSize);
    const canvas = document.getElementById('canvas');
    const cellSize = calculateCellSize(canvas, gridSize);

    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement('div');
        row.className = "row";
        
        for (let x = 1; x <= gridSize; x++) {
            let cell = document.createElement('div');
            cell.className = "gridSquare";
            cell.style.height = `${cellSize}px`;
            cell.style.width = `${cellSize}px`;
            // console.log("height " + cell.style.height + " width " + cell.style.width);
            // cell.style.border = "black 1px solid";
            cell.addEventListener("mouseover", (e) => {
                if (isMouseDown) {
                    draw(cell);
                }
            })
            cell.addEventListener("click", (e) => {
                draw(cell);
            })
            row.appendChild(cell);
        }
        canvas.appendChild(row);
    }
}

function calculateCellSize(canvas, rows) {
    canvasSize = canvas.clientHeight;
    return canvasSize/rows;
}

//TODO - add colour picker
function draw(cell) {
    switch(penMode) {
        case COLOUR:
            cell.style.backgroundColor = penColour;
            break;
        case ERASER:
            cell.style.backgroundColor = "white";
            break;
        case RAINBOW:
            const randR = Math.floor(Math.random() * 256);
            const randG = Math.floor(Math.random() * 256);
            const randB = Math.floor(Math.random() * 256);
            cell.style.backgroundColor = `rgb(${randR}, ${randG}, ${randB})`;
            break;
    }
}

function clearCanvas() {
    const dimension = document.querySelector('.range .rangeValue span').textContent.substring(0, 2);

    canvas.replaceChildren();
    generateGrid(dimension);
}

function clearButtonSelection() {
    switch(penMode) {
        case COLOUR:
            colourBtn.classList.remove('selected');
            break;
        case ERASER:
            eraserBtn.classList.remove('selected');
            break;
        case RAINBOW:
            rainbowBtn.classList.remove('selected');
            break;
    }
}

clearBtn.addEventListener('click', (e) => {
    clearCanvas();
});

colourBtn.addEventListener('click', (e) => {
    clearButtonSelection();
    penMode = COLOUR;
    colourBtn.classList.add('selected');
});

eraserBtn.addEventListener('click', (e) => {
    clearButtonSelection();
    penMode = ERASER;
    eraserBtn.classList.add('selected');
});

rainbowBtn.addEventListener('click', (e) => {
    clearButtonSelection();
    penMode = RAINBOW;
    rainbowBtn.classList.add('selected');
});

body.addEventListener('mousedown', (e) => {
    isMouseDown = true;
});

body.addEventListener('mouseup', (e) => {
    isMouseDown = false;
});

colourPicker.addEventListener("change", watchColourPicker, false);

function watchColourPicker(event) {
    penColour = event.target.value;
}

window.onload = () => {
    generateGrid(DEFAULT_SIZE);
    colourBtn.classList.add('selected');
} 
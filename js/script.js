const DEFAULT_SIZE = 16;
let isMouseDown = false;

const body = document.body;
const canvas = document.getElementById('canvas');

function generateGrid(gridSize) {
    const cellSize = calculateCellSize(canvas, gridSize);

    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement('div');
        row.className = "row";
        
        for (let x = 1; x <= gridSize; x++) {
            let cell = document.createElement('div');
            cell.className = "gridSquare";
            cell.style.height = `${cellSize}px`;
            cell.style.width = `${cellSize}px`;
            console.log("height " + cell.style.height + " width " + cell.style.width);
            // cell.style.border = "black 1px solid";
            cell.addEventListener("mouseover", (e) => {
                shadeIn(cell);
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

function shadeIn(cell) {
    if (isMouseDown) {
        cell.style.backgroundColor = "black";
    }
}

body.addEventListener('mousedown', (e) => {
    isMouseDown = true;
});

body.addEventListener('mouseup', (e) => {
    isMouseDown = false;
});

window.onload = () => {
    generateGrid(DEFAULT_SIZE);
} 
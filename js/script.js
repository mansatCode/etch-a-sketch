const DEFAULT_SIZE = 16;

function generateGrid(gridSize) {

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
            console.log("height " + cell.style.height + " width " + cell.style.width);
            cell.style.border = "black 1px solid";
            row.appendChild(cell);
        }
        canvas.appendChild(row);
    }
}

function calculateCellSize(canvas, rows) {
    canvasSize = canvas.clientHeight;
    return canvasSize/rows;
}

window.onload = () => {
    generateGrid(DEFAULT_SIZE);
}
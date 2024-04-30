import { cfpData } from "./storage.js";

function addRow() {
    let tableRef = document.querySelector("table");
    let newRow = tableRef.insertRow(-1);
    let textCell = newRow.insertCell(0);
    let newText = document.createTextNode("FootPrint Average Score:");
    textCell.appendChild(newText);
    let scoreCell = newRow.insertCell(1);
    const average = cfpData.reduce((total, currentValue) => {
        return total + currentValue.total;
    }, 0) / cfpData.length;
    let scoreText = document.createTextNode(average); 
    scoreCell.appendChild(scoreText);
}
export { addRow }

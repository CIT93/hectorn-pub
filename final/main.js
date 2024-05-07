import { renderTable } from "./render.js";
import { FORM } from "./global.js";
import { saveData, loadData } from "./storage.js";
import { SleepDecision } from "./class.js";

let sleepDataArray = [];

document.addEventListener("DOMContentLoaded", function () {
    sleepDataArray = loadData();
    renderSleepData();
});

FORM.addEventListener("submit", function (event) {
    event.preventDefault();
    const totalHoursSleptInput = parseInt(document.getElementById("totalHoursSlept").value);
    const hoursSleptLastNightInput = parseInt(document.getElementById("hoursSleptLastNight").value);
    const selectedDay = document.getElementById("selectedDay").value;

    resetErrorMessages();

    const sleepDecision = new SleepDecision(totalHoursSleptInput, hoursSleptLastNightInput, selectedDay);
    const validationError = sleepDecision.validateInput();

    if (validationError) {
        displayErrorMessages(validationError);
        return;
    }

    const sleepData = sleepDecision.calculateSleepData();
    updateSleepDataArray(sleepData);
    renderSleepData();
});


const resetErrorMessages = () => {
    document.getElementById("totalHoursSleptError").textContent = "";
    document.getElementById("hoursSleptLastNightError").textContent = "";
};

const displayErrorMessages = (errorMessage) => {
    document.getElementById("totalHoursSleptError").textContent = errorMessage;
};

const updateSleepDataArray = (sleepData) => {
    sleepDataArray.push(sleepData);
    saveData(sleepDataArray);
};

const renderSleepData = () => {
    renderTable(sleepDataArray);
    FORM.reset();
};

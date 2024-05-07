import { TBL } from "./global.js";
import { saveData } from "./storage.js";
import { SleepDecision } from "./class.js";

const createTable = () => {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headings = [
    "Day",
    "Get Up At",
    "Total Hours Slept this Week",
    "Hours Slept Last Night",
    "New Total",
    "Hours Needed for full 56 Hours of sleep",
    "Actions",
  ];
  headings.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
};

const createTableRow = (rowData, isHeader = false) => {
  const rowTag = isHeader ? "th" : "td";
  const tr = document.createElement("tr");
  rowData.forEach((data) => {
    const td = document.createElement(rowTag);
    td.textContent = data;
    tr.appendChild(td);
  });
  return tr;
};

const createButton = (text, clickHandler) => {
  const btn = document.createElement("button");
  btn.textContent = text;
  btn.addEventListener("click", clickHandler);
  return btn;
};

const createJournalEntryRow = (obj, data, index) => {
  const journalEntryRow = createTableRow(["Journal Entry"], true);
  const journalEntryCell = document.createElement("td");
  journalEntryCell.colSpan = 7;
  const journalTextArea = document.createElement("textarea");
  journalTextArea.placeholder = "How did you sleep?";
  journalTextArea.classList.add("journalEntry");
  journalTextArea.addEventListener("input", (event) => {
    obj["journalEntry"] = event.target.value;
    saveData(data);
  });
  if (obj["journalEntry"]) {
    journalTextArea.value = obj["journalEntry"];
  }
  journalEntryCell.appendChild(journalTextArea);
  journalEntryRow.appendChild(journalEntryCell);
  return journalEntryRow;
};

const sleepDataTableBody = (data) => {
  const tbody = document.createElement("tbody");
  data.forEach((obj, index) => {
    const sleepDecision = new SleepDecision(
      obj.totalHoursSlept,
      obj.hoursSleptLastNight
    );
    const newTotal = sleepDecision.calculateTotalHoursSleptThisWeek();
    const hoursAvailableInWeek = sleepDecision.checkSleepCycle();
    const row = createTableRow(
      [
        obj.currentDay,
        obj.startTime,
        obj.totalHoursSlept,
        obj.hoursSleptLastNight,
        newTotal,
        hoursAvailableInWeek,
      ],
      false
    );

    const editBtn = createButton("Edit", () => {
      document.getElementById("totalHoursSlept").value = obj["totalHoursSlept"];
      document.getElementById("hoursSleptLastNight").value =
        obj["hoursSleptLastNight"];
      data.splice(index, 1);
      saveData(data);
      renderTable(data);
    });

    const deleteBtn = createButton("Delete", () => {
      data.splice(index, 1);
      saveData(data);
      renderTable(data);
    });

    const actionsCell = document.createElement("td");
    actionsCell.appendChild(editBtn);
    actionsCell.appendChild(deleteBtn);
    row.appendChild(actionsCell);
    const journalEntryRow = createJournalEntryRow(obj, data, index);
    tbody.appendChild(row);
    tbody.appendChild(journalEntryRow);
  });
  return tbody;
};

const renderSleepDataTable = (data) => {
  TBL.innerHTML = "";
  if (data.length !== 0) {
    const table = createTable(data);
    const tableBody = sleepDataTableBody(data);
    table.appendChild(tableBody);
    TBL.appendChild(table);
  }
};

const renderTable = (data) => {
  renderSleepDataTable(data);
};

export { renderTable };

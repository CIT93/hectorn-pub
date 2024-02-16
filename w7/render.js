const TBL = document.getElementById("tab-data");

function renderTblHeading() {
  const table = document.createElement("table");
  table.setAttribute("id","table")
  const thead = document.createElement("thead");
  thead.setAttribute("id","head")
  const tr = document.createElement("tr");
  const headingTextArr = [
    "Name",
    "Household",
    "HouseSize",
    "Footprint",
    "Actions",
  ];
  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table
}

function renderTbl(data) {
  let table = ""
  if (!document.getElementById("head")) {
    table = renderTblHeading();
  } else {
    table = document.getElementById("table")
  }
  const tbody = document.createElement("tbody");
  const tr = document.createElement("tr");
  //const trTextArr = ["Hector", 3, "Large", 20];
  for (const obj of data) {
    for (let row in obj) {
    if (row === "lastN") {
        continue;
    } if (obj[row] === "houseHoldPTS") {
        continue;
    } if (obj[row] === "houseSizePTS") {
        continue;
    };
    const td = document.createElement("td");
      //trTextArr.forEach(function(text){
      td.textContent = obj[row];
      tr.appendChild(td);
    }
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Del";
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    tr.appendChild(td);
    tbody.appendChild(tr);
    table.appendChild(tbody);
    TBL.appendChild(table);
  }
}
  export { renderTbl, renderTblHeading };
//Modules seem to make sense in what we have covered so far. Thinking about it as the person/team working on making code you would want to focus on different sections to find or at least try to track down issues easier. 
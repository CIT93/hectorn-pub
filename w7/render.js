const TBL = document.getElementById("tab-data");

function renderTblHeading() {
  const table = document.createElement("table");
  table.setAttribute("id", "table");
  const thead = document.createElement("thead");
  thead.setAttribute("id", "thead");
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
  return table;
}

function renderTbl(data) {
  let table = "";
  if (!document.getElementById("table")) {
    table = renderTblHeading();
  } else {
    table = document.getElementById("table");
  }
  
  const tbody = document.createElement("tbody");

  //const trTextArr = ["Hector", 3, "Large", 20];
  for (const obj of data) {
    const tr = document.createElement("tr");
    for (let row in obj) {
      if (row === "lastN") {
        console.log("skip");
        continue;
      } else if (row === "houseMPTS") {
        console.log("skip");
        continue;
      } else if (row === "houseSPTS") {
        console.log("skip");
        continue;
      }
      const td = document.createElement("td");
      td.textContent = obj[row];
      tr.appendChild(td);
    }
    //trTextArr.forEach(function (text) {});
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Del";
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    tr.appendChild(td);
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  TBL.appendChild(table);
}
export { renderTbl };


const TBL = document.getElementById("tab-data");

function renderTblHeading() {
  TBL.innerHTML = "";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = ["Name", "HouseHold", "HouseSize", "Footprint"];
  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
}
function renderTblBtn(index,data) {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  btnDel.addEventListener('click', function(e){
    console.log("hello from the delete button")
    data.splice(index, 1);
    if (data.length === 0) {
      TBL.innerHTML = "";
    } else {
      renderTbl(data);
    }
  });

  btnEdit.addEventListener('click', function(e){
    const obj = data[index];
    document.getElementById("name").value = obj.Name;
    document.getElementById("household").value = obj.HouseHold;
    document.getElementById("housesize").value = obj.HouseSize;
    renderTbl(data)
    });
  return td;
}

function renderTblBody(data) {
  const tbody = document.createElement("tbody");
  data.forEach(function (obj, index) {
    console.log(index)
    const tr = document.createElement("tr");
    for (const [key, value] of Object.entries(obj)) {
      if (key !== "lastName" && key !== "houseMPTS" && key !== "houseSPTS") {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      }
    }
    const td = renderTblBtn(index,data);
    tr.appendChild(td);
    tbody.appendChild(tr);

  });
  return tbody;
}

function renderTbl(data) {
  const table = renderTblHeading();
  const tbody = renderTblBody(data);
  table.appendChild(tbody);
  TBL.appendChild(table);
}

export { renderTbl, renderTblHeading };

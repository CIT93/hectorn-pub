import { renderTbl } from "./render.js";
import { determineHouseHoldPts,determineHouseSizePts } from "./footprint.js";
  
  const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

function start(firstname, lastname, houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    firstN: firstname,
    lastN: lastname,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
  });
}

// function displayOutput() {
//   for (obj of cfpData) {
//     console.log(obj);
//     const newH2 = document.createElement("h2");
//     newH2.textContent = `Carbon Footprint ${obj.cfpTotal}`;
//     const newH3 = document.createElement("h3");
//     newH3.textContent = `Based on number in and size of home for ${obj.firstN} ${obj.lastN}`;
//     const newP = document.createElement("p");
//     newP.textContent = `This number is based on the number if people in the house of ${obj.houseM} (Score: ${obj.houseMPTS}),`;
//     newP.textContent += ` and a ${obj.houseS} size home (Score:${obj.houseSPTS}).`;
//     OUTPUT.appendChild(newH2);
//     OUTPUT.appendChild(newH3);
//     OUTPUT.appendChild(newP);
//   }
// }

FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstname = FORM.firstname.value;
  const lastname = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(firstname, lastname, houseMembers, houseSize);
  OUTPUT.innerHTML = "";
  //displayOutput();
  renderTbl(cfpData);
  FORM.reset();
})
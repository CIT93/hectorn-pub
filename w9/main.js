import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { FORM} from "./global.js"
import { saveLS, cfpData} from "./storage.js"



function start(first, last, houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    firstName: first,
    lastName: last,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
  });
}

renderTbl(cfpData); //passing in reference to local data and renders table

FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const messages = [] //Array to store warning messages
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
//if function to check if first & last name is empty
  if (firstName === "" || firstName === null || lastName === "" || lastName === null) {
    messages.push("Name is Required!") 
  } if (messages.length > 0){
    document.getElementById("error").textContent = messages.join(",") //Display warning message
    return;
  }

  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(firstName, lastName, houseMembers, houseSize);
  saveLS (cfpData) //calling function from local storage but only what is in volatile memory
  renderTbl(cfpData);
  FORM.reset();
  });
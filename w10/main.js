import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
//function now has name and given const so we don't accidentally overwrite
const start = (first, last, houseHoldMembers, houseSize) => {
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

// Function to validate a single field
const validateField = event => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === "") {
    //if whatever is in field is blank make it into template string
    fieldError.textContent = `${fieldId} is required`;
    //add the invalid to the classlist ("error" - listed in HTML)
    event.target.classList.add("invalid");
  } else {
    fieldError.textContent = "";
    event.target.classList.remove("invalid");
  }
};
// Attach blur event listeners
FNAME.addEventListener("blur", validateField);
LNAME.addEventListener("blur", validateField);

FORM.addEventListener("submit", e => {
  e.preventDefault();
  //setting up two variables to verify if true or false(first name is valid = true or false based on evaluating if input is valid )

  //if statement to check validiti, if one of the two is invalid code will skip to else
  if (FNAME.value !== "" && LNAME.value !== "") {
    //if first and last name is valid we will run rest of code below - good form submission.
    SUBMIT.textContent = ""; // remove the invalid warning when resubmitting
    start(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value);
    saveLS(cfpData); //calling function from local storage but only what is in volatile memory
    renderTbl(cfpData);
    FORM.reset();
    //want to show user there is an error with their form submission

  } else {
    //text content is set as a value(submitEl) so we can clear
    SUBMIT.textContent = "Form requires First and Last name";
  }
});

//rest operator
// const add2 = function(...a){
//   return 2+a(3);
//   }
//   const result = add2(1, 2, 3, 4)

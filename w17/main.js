import { renderTbl } from "./render.js";
import { FORM, FNAME, LNAME, SUBMIT, WATER, BOTH} from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { FP } from "./fp.js";

renderTbl(cfpData); //passing in reference to local data and renders table

// Function to validate a single field
const validateField = (event) => {
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

const determineRecycleItems = e => {
  const numberChecked = document.querySelectorAll('.recycle:checked').length;
  return {
    glass: e.target.glass.checked,
    plastic: e.target.plastic.checked,
    paper: e.target.paper.checked,
    aluminum: e.target.aluminum.checked,
    steel: e.target.steel.checked,
    food: e.target.food.checked,
    recyclePoints: (24 - (numberChecked * 4))
  }
}

FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  //setting up two variables to verify if true or false(first name is valid = true or false based on evaluating if input is valid )
  
  //if statement to check validity, if one of the two is invalid code will skip to else
  if (FNAME.value !== "" && LNAME.value !== "") {
    //if first and last name is valid we will run rest of code below - good form submission.
    SUBMIT.textContent = ""; // remove the invalid warning when resubmitting
    //start(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value);
    const fpObj = new FP(
      FNAME.value,
      LNAME.value,
      parseInt(e.target.housem.value),
      e.target.houses.value,
      e.target.foodChoice.value,
      e.target.foodSource.value,
      parseInt(e.target.purchases.value),
      e.target.water.value,
      e.target.dish_washer.checked ? parseInt(e.target.water.value) * 2 : parseInt(e.target.water.value),
      e.target.dish_washer.checked,
      parseInt(e.target.waste.value),
      determineRecycleItems(e),
      parseInt(e.target.vehicle.value),
      parseInt(e.target.publicTrans.value),
      parseInt(e.target.flights.value),
    );
    cfpData.push(fpObj);
    saveLS(cfpData); //calling function from local storage but only what is in volatile memory
    renderTbl(cfpData);
    FORM.reset();
    BOTH.disabled = false;
    //want to show user there is an error with their form submission
  } else {
    //text content is set as a value(submitEl) so we can clear
    SUBMIT.textContent = "Form requires First and Last name";
  }
});

WATER.addEventListener("change", e => {
  if(parseInt(WATER.value) === 0){
    BOTH.disabled = true;
  } else {
    BOTH.disabled = false;
  }
});
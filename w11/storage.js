// function to save local storage. will be running function every time new user input is gathered.

// variable of serializedArray will be stringify cfpData
const saveLS = cfpData => {
  const serializedArr = JSON.stringify(cfpData);
  localStorage.setItem("cfp", serializedArr); //Key of: cfpData with Value: serialized array
}; // when we call the the save LS we willo be passing a reference to the array

// companion function - unsure if this is callback because this function is within the const cfpData so i want to say it is
const getLS = () => {
  //passing in the reference "cfpData"
  const retrievedArr = localStorage.getItem("cfp"); // telling local storage to send me whatever is marked with that key"cfpData"

  if (retrievedArr !== null) {
    //not equal to null - which is empty or unknown value
    return JSON.parse(retrievedArr); // if what you bring is not null (something IS in therewhen bringing it back) parse the relieved array and return it to be used into code
  } else {
    return []; //if equal to null, bring back empty array
  }
};

//const cfpData is set up at the end because code will run line by line we would be trying to run getLS before it had the information of the function
const cfpData = getLS(); //function is getting data from local storage


export { cfpData, saveLS, getLS };

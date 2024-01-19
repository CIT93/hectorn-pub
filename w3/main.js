function determineHouseHoldPts(numberInHousehold) {
  console.log("Inside the Function");
  if (numberInHousehold === 1) {
    carbonFootprintPoints = carbonFootprintPoints + 14;
  } else if (numberInHousehold === 2) {
    carbonFootprintPoints = carbonFootprintPoints + 12;
  } else if (numberInHousehold === 3) {
    carbonFootprintPoints = carbonFootprintPoints + 10;
  } else if (numberInHousehold === 4) {
    carbonFootprintPoints = carbonFootprintPoints + 8;
  } else if (numberInHousehold === 5) {
    carbonFootprintPoints = carbonFootprintPoints + 6;
  } else if (numberInHousehold === 6) {
    carbonFootprintPoints = carbonFootprintPoints + 4;
  } else if (numberInHousehold > 6) {
    carbonFootprintPoints = carbonFootprintPoints + 2;
  }
  console.log(
    `based on the number of members in the household of ${numberInHousehold} the points would be ${carbonFootprintPoints}.`);
}

let carbonFootprintPoints = 0;
//const numberInHousehold = 3;

//global scope

//determineHouseHoldPts(2);

/*
If you have a large house, then add 10 points to your score.
If you have a medium-sized house, then add 7 points.
If you have a small house, then add 4 points.
If you live in an apartment, then add 2 points.*/

// --- My attempt of trying to make a function with a switch statement ---

/*function determineHomeSizePts(homeSize) {
  console.log("Inside the Function");
  switch (homeSize) {
    case largeHouse:
      homeSize + 10;
      break;
    case medHouse:
      homeSize + 7;
      break;
    case smallHouse:
      homeSize + 4;
      break;
    case apt:
      homeSize + 2;
  }
  console.log(
    `total home size gives you ${homeSize} points.`);
}
determineHomeSizePts();*/

let sizeOfHome = 0;
const largeHouse = "small sized home";
const medHouse = "medium sized home";
const smallHouse = "small sized home";
const apt = "an apartment";

function determineHomeSizePts(homeSize) {
  console.log("Inside the Function");
  if (homeSize === largeHouse) {
    carbonFootprintPoints = sizeOfHome + 10;
  } else if (homeSize === medHouse) {
    carbonFootprintPoints = sizeOfHome + 7;
  } else if (homeSize === smallHouse) {
    carbonFootprintPoints = sizeOfHome + 4;
  } else if (homeSize === apt) {
    carbonFootprintPoints = sizeOfHome + 2;
}
  console.log(
    `based on the home size of ${homeSize} your total points would be ${carbonFootprintPoints}.`);
}
determineHomeSizePts(medHouse);
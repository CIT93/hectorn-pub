const cfpData = [];
function determineHouseSizePts(size) {
  let houseSizePoints = 0;
  if (size === "large") {
    houseSizePoints = 10;
  } else if (size === "medium") {
    houseSizePoints = 7;
  } else if (size === "small") {
    houseSizePoints = 4;
  } else if (size === "apt") {
    houseSizePoints = 2;
  }
  return houseSizePoints;
}

function determineHouseHoldPts(numberInHousehold) {
  let houseHoldPts = 0;
  if (numberInHousehold === 1) {
    houseHoldPts = 14;
  } else if (numberInHousehold === 2) {
    houseHoldPts = 12;
  } else if (numberInHousehold === 3) {
    houseHoldPts = 10;
  } else if (numberInHousehold === 4) {
    houseHoldPts = 8;
  } else if (numberInHousehold === 5) {
    houseHoldPts = 6;
  } else if (numberInHousehold === 6) {
    houseHoldPts = 4;
  } else if (numberInHousehold > 6) {
    houseHoldPts = 2;
  }
  return houseHoldPts;
}

function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push([
    houseHoldMembers,
    houseSize,
    houseHoldPTS,
    houseSizePTS,
    total,
  ]);
}

function displayOutput1() {
  for (arr of cfpData) {
    console.log(arr)
    const output = document.getElementById("output1");
    const newP = document.createElement("p");
    newP.textContent = `Based on your members of household of ${arr[0]}, your Carbon Footprint total is ${arr[2]}`;
    output.appendChild(newP)
  }
}
function displayOutput2() {
  for (arr of cfpData) {
    console.log(arr)
    const output = document.getElementById("output2");
    const newP = document.createElement("p");
    newP.textContent = `Based on your house size of ${arr[1]}, your Carbon Footprint total is ${arr[3]}`;
    output.appendChild(newP)
  }
}
function displayTotal() {
  for (arr of cfpData) {
    console.log(arr)
    const output = document.getElementById("outputTotal");
    const newP = document.createElement("p");
    newP.textContent = `Based on your members of household of ${arr[0]} and your house size of ${arr[1]}, your Carbon Footprint total is ${arr[4]}`;
    output.appendChild(newP)
  }
}

start(1, "large");
start(2, "medium");
start(3, "small");
start(4, "apt");
start(5, "large");
start(6, "medium");

displayOutput1();
displayOutput2();
displayTotal();
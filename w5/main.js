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
  cfpData.push({
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total
  });
}

function displayOutput() {
  for (obj of cfpData) {
    console.log(obj)
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint Total of ${obj.cfpTotal}`;
    const newP = document.createElement("p");
    newP.textContent = `Members of household of ${obj.houseM} (Score: ${obj.houseMPTS}),`;
    newP.textContent += ` and a ${obj.houseS} size home (Score:${obj.houseSPTS}).`;
    output.appendChild(newH2);
    output.appendChild(newP)
  }
}

// function displayOutput() {
//   for (let i = 0; i < cfpData.length; i++) {
//     console.log(i)
//     const output = document.getElementById("output");
//     const newH2 = document.createElement("h2");
//     newH2.textContent = `Carbon Footprint ${cfpData[i][4]}`;
//     const newH3 = document.createElement("h3");
//     newH3.textContent = `Based on number in and size of home`;
//     const newP = document.createElement("p");
//     newP.textContent = `This number is based on the number of people in the house of ${arr[0]} (score: ${arr[3]}),`;
//     newP.textContent += ` and a ${arr[1]} size home (score:${arr[3]}).`;
//     output.appendChild(newH2);
//     output.appendChild(newH3);
//     output.appendChild(newP)*/
//     }
//   }

start(1, "large");
start(2, "medium");
start(3, "small");
start(4, "apt");
start(5, "large");
start(6, "medium");

displayOutput()
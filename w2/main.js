const myMembers = 10;
const homeSize = 2;
const myFood = 8;
const waterConsumption = 2;
const homePurchase = 10;
const myWaste = 30;
const myRecycling = 4;
const annualTransportation = 32;

const total = myMembers + homeSize + myFood + waterConsumption + homePurchase + myWaste + myRecycling + annualTransportation

const myHeading = document.querySelector("h2");
myHeading.textContent = total;

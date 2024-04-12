// const FORM = document.getElementById("wOForm");
// const OUTPUT = document.getElementById("results");

// const displayOutput = (callback) => {
//   const warmup = FORM.exercise.value;
//   const h1 = document.createElement("h1");
//   h1.textContent = `Start ${warmup} warmup`;
//   OUTPUT.appendChild(h1);
//   setTimeout(() => {
//     callback(warmup);
//   }, 2000);
// };

// FORM.addEventListener("submit", (e) => {
//   e.preventDefault();
//   displayOutput(stopWarmup);
//   FORM.reset();

// });

// const stopWarmup = (exercise) => {
//   const h2 = document.createElement("h2");
//   h2.textContent = `Stop ${exercise}`;
//   OUTPUT.appendChild(h2);
// };


const FORM = document.getElementById("wOForm");
const OUTPUT = document.getElementById("results");

const displayOutput = () => {
  return new Promise((resolve, reject) => {
    const warmup = FORM.exercise.value;
    const h1 = document.createElement("h1");
    h1.textContent = `Start ${warmup} warmup`;
    OUTPUT.appendChild(h1);
    setTimeout(() => {
      resolve(warmup); // Resolve the promise with the warmup exercise
    }, 2000);
  });
};

const clearPage = () => {
  OUTPUT.innerHTML = ''; // Clear the contents of the OUTPUT element
};

FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  clearPage(); // Clear the page contents
  displayOutput()
    .then(stopWarmup) // Use promise chaining to handle result of displayOutput
    .then(() => FORM.reset()) // Reset form after warmup is stopped
    .catch((error) => console.error(error)); // Error handling
});

const stopWarmup = (exercise) => {
  const h2 = document.createElement("h2");
  h2.textContent = `Stop ${exercise}`;
  OUTPUT.appendChild(h2);
};

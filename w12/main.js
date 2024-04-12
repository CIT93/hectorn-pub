const FORM = document.getElementById("wOForm");
const OUTPUT = document.getElementById("results");

const displayOutput = (callback) => {
  const warmup = FORM.exercise.value;
  const h1 = document.createElement("h1");
  h1.textContent = `Start ${warmup} warmup`;
  OUTPUT.appendChild(h1);
  setTimeout(() => {
    callback(warmup);
  }, 2000);
};

FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  displayOutput(stopWarmup);
  FORM.reset();

});

const stopWarmup = (exercise) => {
  const h2 = document.createElement("h2");
  h2.textContent = `Stop ${exercise}`;
  OUTPUT.appendChild(h2);
};


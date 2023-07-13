import "./styles.css";

const body = document.querySelector("body");
const createCarForm = document.createElement("form");
createCarForm.classList.add("create-update-form");
const updateCarForm = document.createElement("form");
updateCarForm.classList.add("create-update-form");

const nameInput = document.createElement("input");
nameInput.className = "form-control";

const colorInput = document.createElement("input");
colorInput.type = "color";
colorInput.classList.add("form-control", "form-control-color");

const createCarBtn = document.createElement("input");
createCarBtn.classList.add("btn", "btn-warning");
createCarBtn.type = "submit";
const updateCarBtn = createCarBtn.cloneNode(true);
createCarBtn.value = "Create";
updateCarBtn.value = "Update";

const nameInputUPD = nameInput.cloneNode(true);
const colorInputUPD = colorInput.cloneNode(true);

nameInput.id = "create-car-name";
colorInput.id = "create-car-color";
createCarForm.append(nameInput, colorInput, createCarBtn);

nameInputUPD.id = "update-car-name";
colorInputUPD.id = "update-car-color";
updateCarForm.append(nameInputUPD, colorInputUPD, updateCarBtn);

body.append(createCarForm, updateCarForm);

const mainBtnContainer = document.createElement("div");
mainBtnContainer.classList.add("main-btn-container");

const raceBtn = document.createElement("button");
raceBtn.classList.add("btn", "btn-info");
const resetBtn = raceBtn.cloneNode(true);
raceBtn.innerHTML = "Race";
resetBtn.innerHTML = "Reset";
const generateBtn = document.createElement("button");
generateBtn.classList.add("btn", "btn-warning");
generateBtn.innerHTML = "Generate cars";

mainBtnContainer.append(raceBtn, resetBtn, generateBtn);
body.append(mainBtnContainer);

const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container")

const garageTitle = document.createElement("h1");
let carsCount = 104; //TODO!!! From server//
garageTitle.innerHTML = `Garage (${carsCount})`;

const pageTitle = document.createElement("h2");
let pageN = 1; //TODO!!!//
pageTitle.innerHTML = `Page #${pageN}`;

mainContainer.append(garageTitle, pageTitle);
body.append(mainContainer);

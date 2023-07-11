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

const nameInputUPD = nameInput.cloneNode(true);
const colorInputUPD = colorInput.cloneNode(true);

nameInput.id = "create-car-name";
colorInput.id = "create-car-color";
createCarForm.append(nameInput);
createCarForm.append(colorInput);
body.append(createCarForm);


nameInputUPD.id = "update-car-name";
colorInputUPD.id = "update-car-color";
updateCarForm.append(nameInputUPD);
updateCarForm.append(colorInputUPD);
body.append(updateCarForm);

import "./styles.css";

fetch("http://127.0.0.1:3000/garage", {
    method: "GET",
})
    .then((result) => {
        return result.json();
    })
    .then((json) => {
        drawGarage(json);
    });

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

function drawGarage(garage) {
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("main-container");

    const garageTitle = document.createElement("h1");
    console.log(garage);
    let carsCount = garage.length; //TODO!!! From server//
    let pageCount = Math.ceil(carsCount / 10);
    garageTitle.innerHTML = `Garage (${carsCount})`;

    const pageTitle = document.createElement("h2");
    let pageN = 1;
    pageTitle.innerHTML = `Page #${pageN}`;

    mainContainer.append(garageTitle, pageTitle);

    const carIconTemplate = document.createElement("img");
    const carIconSVG = `<svg width="86" height="46" viewBox="0 0 86 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M55.6 1.73333C57.3333 2.66667 60.4 5.86667 62.6667 8.93333C66 13.3333 68 14.6667 73.4667 16C82.2667 18.1333 85.3333 21.2 85.3333 27.7333C85.3333 32.8 82.2667 37.3333 78.9333 37.3333C78.1333 37.3333 76.6667 38.4 75.7333 39.7333C71.2 46.1333 63.0667 46.6667 59.2 40.6667C57.0667 37.4667 56.4 37.3333 43.3333 37.3333C29.7333 37.3333 29.4667 37.4667 25.6 41.3333C20.5333 46.4 16.6667 46.4 12 41.3333C10 39.0667 7.33333 37.3333 6.4 37.3333C3.06667 37.3333 0 32.6667 0 27.8667C0 22.2667 2.66667 18.2667 7.6 16.1333C9.73333 15.3333 13.0667 11.8667 15.0667 8.66667C17.0667 5.33333 20.1333 2 22.1333 1.33333C27.0667 -0.533334 52 -0.266666 55.6 1.73333ZM17.4667 11.0667C14.5333 15.0667 10.4 19.0667 8.13333 20C4.4 21.4667 4 22.2667 4 27.3333C4 31.4667 4.66666 33.3333 6.26666 34C7.6 34.4 8.8 34.1333 9.06667 33.4667C10.1333 30.2667 14.2667 26.6667 17.7333 25.8667C20.8 25.2 22.1333 25.8667 26 29.8667L30.5333 34.6667H44C56.5333 34.6667 57.6 34.4 58.2667 32C58.6667 30.4 60.8 28.2667 62.9333 27.2C67.8667 24.6667 73.6 26.5333 75.7333 31.3333C78 36.2667 81.3333 34.1333 81.3333 27.8667C81.3333 22.1333 80.4 21.3333 70 18.8C65.8667 17.7333 63.4667 15.8667 59.6 10.6667L54.6667 4H38.6667H22.8L17.4667 11.0667ZM62.9333 30.9333C60.9333 32.9333 60.9333 37.7333 62.9333 39.7333C64.9333 41.7333 69.7333 41.7333 71.7333 39.7333C75.4667 36 72.6667 29.3333 67.3333 29.3333C65.7333 29.3333 63.8667 30 62.9333 30.9333ZM14.9333 30.9333C14 31.8667 13.3333 33.7333 13.3333 35.3333C13.3333 41.6 21.6 43.7333 24.1333 38.1333C27.0667 31.8667 19.7333 26.1333 14.9333 30.9333Z" fill="white"/>
    </svg>`;
    carIconTemplate.src = `data:image/svg+xml;utf8,${carIconSVG}`;
    carIconTemplate.alt = "car icon";
    carIconTemplate.classList.add("car-icon");
    const finishIcon = document.createElement("img");
    finishIcon.classList.add("finish-icon");
    finishIcon.src = "../assets/img/finish.png";
    finishIcon.alt = "finish icon";

    for (let i = 0; carsCount < 10 ? i < carsCount : i < 10; i++) {
        const carContainer = document.createElement("div");
        carContainer.id = `car-container-${i}`;
        const carNameContainer = document.createElement("div");
        carNameContainer.classList.add("car-name-container");

        const selectCarBtn = document.createElement("button");
        selectCarBtn.classList.add("btn", "btn-warning", "btn-sm");
        selectCarBtn.innerHTML = "Select";

        const removeCarBtn = document.createElement("button");
        removeCarBtn.classList.add("btn", "btn-warning", "btn-sm");
        removeCarBtn.innerHTML = "Remove";

        const carName = document.createElement("span");
        carName.classList.add("car-name");
        carName.innerHTML = garage[i].name;

        const innerCarContainer = document.createElement("div");
        innerCarContainer.classList.add("inner-car-container");
        const startCarBtn = document.createElement("button");
        startCarBtn.classList.add("btn", "btn-sm", "btn-outline-warning");
        const stopCarBtn = startCarBtn.cloneNode(true);
        startCarBtn.innerHTML = "A";
        stopCarBtn.innerHTML = "B";
        let carIcon = carIconTemplate.cloneNode(true);
        carIcon.src = carIcon.src.replace('fill="white"', `fill="%23${garage[i].color.substring(1)}"`);

        innerCarContainer.append(startCarBtn, stopCarBtn, carIcon, finishIcon.cloneNode(true));

        carNameContainer.append(selectCarBtn, removeCarBtn, carName);
        carContainer.append(carNameContainer, innerCarContainer);
        mainContainer.append(carContainer);
    }

    body.append(mainContainer);
}

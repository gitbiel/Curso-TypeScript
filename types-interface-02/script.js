"use strict";
const desconto = 15;
const allCars = [
    {
        name: "fiat",
        color: "white",
        available: false,
    },
    {
        name: "volks",
        color: "black",
        available: true,
    },
];
function carIsHere(searchCar) {
    return allCars.findIndex((car, localDoPatio) => {
        if (searchCar.color === car.color &&
            searchCar.name === car.name &&
            car.available === true) {
            console.log({ localDoPatio });
            return localDoPatio;
        }
    });
}
carIsHere({ name: "volks", color: "black" });
function buyCar({ name, color }) {
    const location = carIsHere({ name, color });
    if (location) {
        allCars[location].available = false;
        // allCars[location].owner = "Biel";
        console.log(allCars[location], "Adquirido com sucesso!");
    }
}
buyCar({ name: "volks", color: "black" });

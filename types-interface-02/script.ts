interface ICar {
  name: string;
  color: "black" | "white" | "gray";
  available?: boolean;
}
interface ICar {
  name: string;
  color: "black" | "white" | "gray";
  available?: boolean;
}
type desconto = 20 | 15 | 5;
const desconto: desconto = 15;

const allCars: Array<ICar> = [
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

function carIsHere(searchCar: ICar) {
  return allCars.findIndex((car, localDoPatio) => {
    if (
      searchCar.color === car.color &&
      searchCar.name === car.name &&
      car.available === true
    ) {
      console.log({ localDoPatio });
      return localDoPatio;
    }
  });
}

carIsHere({ name: "volks", color: "black" });

function buyCar({ name, color }: ICar) {
  const location: number = carIsHere({ name, color });

  if (location) {
    allCars[location].available = false;
    // allCars[location].owner = "Biel";

    console.log(allCars[location], "Adquirido com sucesso!");
  }
}

buyCar({ name: "volks", color: "black" });

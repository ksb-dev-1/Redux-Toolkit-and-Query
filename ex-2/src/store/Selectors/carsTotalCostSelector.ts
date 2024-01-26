import { createSelector } from "reselect";
import { selectCarsState } from "../slices/carsSlice";

const carsStateSelector = (state: any) => selectCarsState(state);

export const memoizedCarsTotalCostSelector = createSelector(
  carsStateSelector,
  (cars) =>
    // const filteredCars = cars.data.filter((car: Car) =>
    //   car.name.toLowerCase().includes(cars.searchTerm.toLowerCase())
    // );

    // return filteredCars.reduce((acc, car) => {
    //   return acc + car.cost;
    // }, 0);

    cars.data
      .filter((car: Car) =>
        car.name.toLowerCase().includes(cars.searchTerm.toLowerCase())
      )
      .reduce((acc, car) => {
        return acc + car.cost;
      }, 0)
);

// let totalCost = 0;

// for (let car of filteredCars) {
//   totalCost += car.cost;
// }
// return totalCost;

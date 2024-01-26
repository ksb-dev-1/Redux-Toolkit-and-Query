import { createSelector } from "reselect";
import { selectCarsState } from "../slices/carsSlice";

const carsStateSelector = (state: any) => selectCarsState(state);

export const memoizedCarsListSelector = createSelector(
  carsStateSelector,
  (cars) => {
    return cars.data.filter((car: Car) =>
      car.name.toLowerCase().includes(cars.searchTerm.toLowerCase())
    );
  }
);

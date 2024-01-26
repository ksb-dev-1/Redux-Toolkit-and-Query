"use client";

import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "@/store";
import { memoizedCarsListSelector } from "@/store/Selectors/carsListSelector";
import { memoizedFormSelector } from "@/store/Selectors/formSelector";

export default function CarList() {
  const dispatch = useDispatch();

  const cars = useSelector(memoizedCarsListSelector);
  const { name } = useSelector(memoizedFormSelector);

  const handleCarDelete = (car: Car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car: Car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}

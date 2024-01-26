import { createSlice, nanoid } from "@reduxjs/toolkit";
import { RootState } from "..";

const initialState: Cars = {
  searchTerm: "",
  data: [],
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      state.data.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost,
      });
    },
    removeCar(state, action) {
      const updated = state.data.filter((car) => {
        return car.id !== action.payload;
      });
      state.data = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const selectCarsState = (state: RootState) => state.cars;
export const carsReducer = carsSlice.reducer;

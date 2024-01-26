import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { addCar } from "../slices/carsSlice";

const initialState: Form = {
  name: "",
  cost: 0,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addCar, (state) => {
      state.name = "";
      state.cost = 0;
    });
  },
});

export const { changeName, changeCost } = formSlice.actions;
export const selectFormState = (state: RootState) => state.form;
export const formReducer = formSlice.reducer;

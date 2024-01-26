import { createSelector } from "reselect";
import { selectFormState } from "../slices/formSlice";

const formStateSelector = (state: any) => selectFormState(state);

export const memoizedFormSelector = createSelector(
  formStateSelector,
  (state) => {
    return {
      name: state.name,
      cost: state.cost,
    };
  }
);

"use client";

import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "@/store";
import { memoizedFormSelector } from "@/store/Selectors/formSelector";

export default function CarForm() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector(memoizedFormSelector);

  // const name = useSelector((state: RootState) => state.form.name);
  // const cost = useSelector((state: RootState) => state.form.cost);

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(changeName(e.currentTarget.value));
  };
  const handleCostChange = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(changeCost(parseInt(e.currentTarget.value)) || 0);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addCar({
        name,
        cost,
      })
    );
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost || ""}
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

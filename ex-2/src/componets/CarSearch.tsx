"use client";

import { RootState } from "@/store";
import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm } from "@/store";

export default function CarSearch() {
  const searchTerm = useSelector((state: RootState) => state.cars.searchTerm);
  const dispatch = useDispatch();

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearchTerm(e.target.value));
  };

  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input
          className="input"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  );
}

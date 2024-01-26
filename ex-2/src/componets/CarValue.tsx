"use client";

import { useSelector } from "react-redux";
import { memoizedCarsTotalCostSelector } from "@/store/Selectors/carsTotalCostSelector";

export default function CarValue() {
  const totalCost = useSelector(memoizedCarsTotalCostSelector);

  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

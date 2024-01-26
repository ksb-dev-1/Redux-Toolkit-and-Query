import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk<User[]>("users/fetch", async () => {
  const response = await axios.get<User[]>("http://localhost:3005/users");

  //await pause(3000);

  return response.data;
});

// Dev Only
const pause = (duration: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

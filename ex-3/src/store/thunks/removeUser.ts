import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const removeUser = createAsyncThunk<any, User>(
  "users/remove",
  async (user: User) => {
    const response = await axios.delete<User[]>(
      `http://localhost:3005/users/${user.id}`
    );

    return response.data;
  }
);

// await pause(3000)

const pause = (duration: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

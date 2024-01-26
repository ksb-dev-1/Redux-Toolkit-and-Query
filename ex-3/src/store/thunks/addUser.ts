import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

export const addUser = createAsyncThunk<User>("users/add", async () => {
  const response = await axios.post<User>("http://localhost:3005/users", {
    id: nanoid(),
    name: faker.person.fullName(),
  });

  return response.data;
});

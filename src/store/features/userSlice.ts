import { singInUser } from "@/api/playlist";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk(
  "user/getUser",
  async (userData: { email: string; password: string }) => {
    const user = await singInUser(userData);
    return user;
  }
);
//создать getToken
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    // Обрабатываем экшены, связанные с нашим асинхронным thunk
    builder
      // Обработка успешного выполнения асинхронного экшена getUser
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload; // Обновляем состояние пользователя данными из action.payload
      })
      // Обработка неудачного выполнения асинхронного экшена getUser
      .addCase(getUser.rejected, (state, action) => {
        console.error("Error:", action.error.message); // Выводим сообщение об ошибке в консоль
      });
    // .addCase
  },
});

export const { logout } = userSlice.actions;
export const userReducer = userSlice.reducer;

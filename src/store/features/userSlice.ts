import { getTokens, signInUser } from "@/api/playlist";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk(
  "user/getUser",
  async (userData: { email: string; password: string }) => {
    const user = await signInUser(userData);
    return user;
  }
);

//создать getToken
export const getTokensState = createAsyncThunk(
  "token/getTokens",
  async (userData: { email: string; password: string }) => {
    const tokens = await getTokens(userData);
    return tokens;
  }
);

type TokensType = {
  access: string;
  refresh: string;
};

type UserType = {
  _id: number;
  username: string;
  email: string;
};

type UserStateType = {
  user: UserType | null;
  tokens: TokensType | null;
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    tokens: null,
  } as UserStateType,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.tokens = null;
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
      })
      .addCase(getTokensState.fulfilled, (state, action) => {
        state.tokens = action.payload;
      })
      .addCase(getTokensState.rejected, (state, action) => {
        console.error("Error:", action.error.message);
      });
  },
});

export const { logout } = userSlice.actions;
export const userReducer = userSlice.reducer;

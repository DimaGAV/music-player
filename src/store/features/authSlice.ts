import { singInUser } from "@/api/playlist";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk(
  "user/getUser",
  async (userData: {
    email: string,
    password: string
  }) => { 
    const user = await singInUser(userData)
    return user
  }
)

type AuthStateType =  {
  authState: boolean;
}

const initialState: AuthStateType = {
  authState: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<boolean>) => {
      state.authState = action.payload;
    },
  },
});

export const { setAuthState } = authSlice.actions;
export const authReducer = authSlice.reducer;
import { PlaylistType } from "@/types/playlist";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PlaylistStateType =  {
  currentTrack: null | PlaylistType;
}

const initialState: PlaylistStateType = {
  currentTrack: null,
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<PlaylistType>) => {
      state.currentTrack = action.payload;
    },
  },
});

export const { setCurrentTrack } = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;
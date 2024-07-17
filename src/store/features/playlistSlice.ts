import { PlaylistType } from "@/types/playlist";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PlaylistStateType =  {
  currentTrack: null | PlaylistType;
  playlist: PlaylistType[];
  // shuffledPlaylist: 
}

const initialState: PlaylistStateType = {
  currentTrack: null,
  playlist: [],
  // shuffledPlaylist: []
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<{track: PlaylistType, tracks: PlaylistType[]}>) => {
      state.currentTrack = action.payload.track;
      state.playlist = action.payload.tracks
    },
    // setNextTrack
  },
});

export const { setCurrentTrack } = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;
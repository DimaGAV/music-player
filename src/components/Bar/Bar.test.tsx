import renderer from "react-test-renderer";
import Bar from "./Bar";
import ReduxProvider from "@/store/ReduxProvider";
import { PlayerStateProvider } from "@/contexts/PlayerStateContext";
import { PlaylistStateType } from "@/store/features/playlistSlice";

it("renders correctly", () => {

  const initialState: PlaylistStateType = {
currentTrack: {
    _id: 2,
    name: "Test Track 2",
    author: "Test Artist 2",
    release_date: "2024-02-01",
    genre: "Rock",
    duration_in_seconds: 210,
    album: "Test Album 2",
    logo: "/path/to/logo2.png",
    track_file: "/path/to/track2.mp3",
    stared_user: [],
}
  }

  const tree = renderer
    .create(
      <ReduxProvider>
        <PlayerStateProvider>
          <Bar />
        </PlayerStateProvider>
      </ReduxProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

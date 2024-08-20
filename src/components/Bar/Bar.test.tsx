import renderer from "react-test-renderer";
import Bar from "./Bar";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { PlayerStateProvider } from "@/contexts/PlayerStateContext";
import { PlaylistStateType } from "@/store/features/playlistSlice";

// Создаем мокированный стор
const mockStore = configureStore();

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
    },
  };

  // Создаем стор с начальным состоянием
  const store = mockStore({ playlist: initialState });

  const tree = renderer
    .create(
      <Provider store={store}>
        {/* <PlayerStateProvider> */}
        <Bar />
        {/* </PlayerStateProvider> */}
      </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

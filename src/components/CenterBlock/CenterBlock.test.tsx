import { render, screen } from "@testing-library/react";
import CenterBlock from "@/components/CenterBlock/CenterBlock";
import { PlaylistType } from "@/types/playlist";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

// Создаем моковый стор
const mockStore = configureMockStore();
const store = mockStore({
  user: {
    tokens: {
      accessToken: "mockAccessToken",
      refreshToken: "mockRefreshToken",
    },
    user: {
      id: 1,
      username: "mockUser",
    },
  },
});

const mockTracks: PlaylistType[] = [
  {
    _id: 1,
    name: "Track 1",
    author: "Artist 1",
    release_date: "2024-01-01",
    genre: "Genre 1",
    duration_in_seconds: 120,
    album: "Album 1",
    logo: "logo1.png",
    track_file: "file1.mp3",
    stared_user: [],
  },
];

describe("CenterBlock", () => {
  it("корректный рендер заголовка", () => {
    render(
      <Provider store={store}>
        <CenterBlock tracks={mockTracks} title="Test Title" />
      </Provider>
    );

    const titleElement = screen.getByText(/Test Title/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("отображает заголовок по умолчанию, если заголовок не указан", () => {
    render(
      <Provider store={store}>
        <CenterBlock tracks={mockTracks} />
      </Provider>
    );

    const defaultTitleElement = screen.getByText(/Треки/i);
    expect(defaultTitleElement).toBeInTheDocument();
  });

  it("выводит сообщение об ошибке, если указан параметр error prop", () => {
    render(
      <Provider store={store}>
        <CenterBlock tracks={mockTracks} error="Test Error" />
      </Provider>
    );

    const errorElement = screen.getByText(/Test Error/i);
    expect(errorElement).toBeInTheDocument();
  });

  it("renders Playlist component with tracks", () => {
    render(
      <Provider store={store}>
        <CenterBlock tracks={mockTracks} />
      </Provider>
    );

    const playlistItems = screen.getAllByText(/Track 1/i);
    expect(playlistItems.length).toBeGreaterThan(0);
  });
});

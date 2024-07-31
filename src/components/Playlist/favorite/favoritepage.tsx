"use client";
import { useAppSelector } from "@/hooks";
import PlaylistLayout from "../PlaylistLayout";
import Track from "@/components/Track/Track";

const Favorites = () => {
  const favorites = useAppSelector((state) => state.playlist.likedPlaylist);

  return (
    <PlaylistLayout>
      {favorites.map((track) => (
        <Track key={track._id} track={track} tracks={favorites} />
      ))}
    </PlaylistLayout>
  );
};

export default Favorites;

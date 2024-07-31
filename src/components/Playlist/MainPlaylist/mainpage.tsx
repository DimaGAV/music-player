// "use client";
// import { useAppSelector } from "@/hooks";
import PlaylistLayout from "../PlaylistLayout";
import Track from "../../Track/Track";
import { PlaylistType } from "@/types/playlist";

type PlaylistProps = {
  tracks: PlaylistType[];
};

const MainPlaylist = ({ tracks }: PlaylistProps) => {
  // const tracks = useAppSelector((state) => state.playlist.playlist);

  return (
    <PlaylistLayout>
      {tracks.map((track) => (
        <Track key={track._id} track={track} tracks={tracks} />
      ))}
    </PlaylistLayout>
  );
};

export default MainPlaylist;

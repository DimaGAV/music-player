import styles from "./CenterBlock.module.css";
import Filter from "@/components/Filter/Filter";
import Playlist from "@/components/Playlist/Playlist";
import Search from "@/components/Search/Search";
import { PlaylistType } from "@/types/playlist";

type CenterBlockProps = {
  tracks: PlaylistType[];
  title?: string;
  error?: string;
};

const CenterBlock = ({ tracks = [], error, title }: CenterBlockProps) => {
  return (
    <div className={styles.mainCenterblock}>
      <Search />
      <h2 className={styles.centerblockHeader}>{title || "Треки"}</h2>
      <Filter tracks={tracks} />
      {error && <div className={styles.error}>{error}</div>}
      <Playlist tracks={tracks} />
    </div>
  );
};

export default CenterBlock;

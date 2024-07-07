import styles from "./CenterBlock.module.css"
import Filter from "@/components/Filter/Filter";
import Playlist from "@/components/Playlist/Playlist";
import Search from "@/components/Search/Search";

const CenterBlock = () => {
    return ( <div className={styles.mainCenterblock}>
        <Search/>
        <h2 className={styles.centerblockHeader}>
          Треки
        </h2>
        <Filter/>
        <Playlist/>
      </div> );
}
 
export default CenterBlock;
import Controls from "@/components/Controls/Controls";
import TrackPlay from "@/components/TrackPlay/TrackPlay";
import Volume from "@/components/Volume/Volume";
import styles from "./Bar.module.css"

const Bar = () => {
    return ( <div className={styles.bar}>
        <div className={styles.barContent}>
          <div className={styles.barPlayerProgress} />
          <div className={styles.barPlayerBlock}>
            <div className={styles.barPlayer}>
              <Controls/>
              <TrackPlay/>
            </div>
            <Volume/>
          </div>
        </div>
      </div> );
}
 
export default Bar;
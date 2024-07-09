"use client";
import Controls from "@/components/Controls/Controls";
import TrackPlay from "@/components/TrackPlay/TrackPlay";
import Volume from "@/components/Volume/Volume";
import styles from "./Bar.module.css";
import { useCurrentTrack } from "@/contexts/CurrentTrackProvider";

const Bar = () => {
  const { currentTrack } = useCurrentTrack();

  if (!currentTrack) {
    return null;
  }

  const { author, album } = currentTrack;
  return (
    <div className={styles.bar}>
      <div className={styles.barContent}>
        <div className={styles.barPlayerProgress} />
        <div className={styles.barPlayerBlock}>
          <div className={styles.barPlayer}>
            <Controls />
            <TrackPlay author={author} album={album} />
          </div>
          <Volume />
        </div>
      </div>
    </div>
  );
};

export default Bar;

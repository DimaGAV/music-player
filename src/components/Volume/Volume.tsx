import { useEffect, useRef, useState } from "react";
import styles from "./Volume.module.css";

const Volume = () => {

  const [volume, setVolume] = useState<number>(0.5)

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
        audioRef.current.volume = volume;
    }
}, [volume]);

  return (
    <div className={styles.barVolumeBlock}>
      <div className={styles.volumeContent}>
        <div className={styles.volumeImage}>
          <svg className={styles.volumeSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-volume" />
          </svg>
        </div>
        <div className={styles.volumeProgress}>
        <audio ref={audioRef} src= controls></audio>
        <input className={styles.volumeProgress} name="range" type="range" />
        </div>
      </div>
    </div>
  );
};

export default Volume;

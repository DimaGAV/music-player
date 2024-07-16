"use client";

import { PlaylistType } from "@/types/playlist";
import styles from "./Track.module.css";
import { useCurrentTrack } from "@/contexts/CurrentTrackProvider";
import { formatTime } from "@/utils/formatTime";
import { usePlayerState } from "@/contexts/PlayerStateContext";
/* import { useAppDispatch } from "@/hooks";
import { setCurrentTrack } from "@/store/features/playlistSlice"; */

type TrackProps = {
  track: PlaylistType;
};

const Track = ({ track }: TrackProps) => {
  // const dispatch = useAppDispatch();
  const { setCurrentTrack } = useCurrentTrack();
  const { setIsPlaying } = usePlayerState();
  const { name, author, album, duration_in_seconds } = track;

  const handleTrackClick = () => {
    // dispatch(setCurrentTrack(track));
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  return (
    <div className={styles.playlistItem}>
      <div className={styles.playlistTrack}>
        <div onClick={handleTrackClick} className={styles.trackTitle}>
          <div className={styles.trackTitleImage}>
            <svg className={styles.trackTitleSvg}>
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          <div className="track__title-text">
            <span className={styles.trackTitleLink}>
              {name}
              <span className={styles.trackTitleSpan} />
            </span>
          </div>
        </div>
        <div className={styles.trackAuthor}>
          <span className={styles.trackAuthorLink}>{author}</span>
        </div>
        <div className={styles.trackAlbum}>
          <span className={styles.trackAlbumLink}>{album}</span>
        </div>
        <div className="track__time">
          <svg className={styles.trackTimeSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </svg>
          <span className={styles.trackTimeText}>
            {formatTime(duration_in_seconds)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Track;

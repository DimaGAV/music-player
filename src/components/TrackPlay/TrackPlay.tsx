import styles from "./TrackPlay.module.css";

type TrackPlayProps = {
  author: string;
  album: string;
};

const TrackPlay = ({ author, album }: TrackPlayProps) => {
  return (
    <div className={styles.playerTrackPlay}>
      <div className={styles.trackPlayContain}>
        <div className={styles.trackPlayImage}>
          <svg className={styles.trackPlaySvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-note" />
          </svg>
        </div>
        <div className={styles.trackPlayAuthor}>
          <a className={styles.trackPlayAuthorLink} href="http://">
            {author}
          </a>
        </div>
        <div className={styles.trackPlayAlbum}>
          <a className={styles.trackPlayAlbumLink} href="http://">
            {album}
          </a>
        </div>
      </div>
      <div className={styles.trackPlayLikeDis}>
        <div className={styles.trackPlayLike}>
          <svg className={styles.trackPlayLikeSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TrackPlay;

"use client";
import Controls from "@/components/Controls/Controls";
import TrackPlay from "@/components/TrackPlay/TrackPlay";
import Volume from "@/components/Volume/Volume";
import styles from "./Bar.module.css";
import { useCurrentTrack } from "@/contexts/CurrentTrackProvider";
import { useEffect, useRef, useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import { formatTime } from "@/utils/formatTime";

const Bar = () => {
  const { currentTrack } = useCurrentTrack();

  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);

  const audioRef = useRef<HTMLAudioElement>(null);

  const duration = audioRef.current?.duration || 0;

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying((prev) => !prev);
    }
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(event.target.value);
    }
  };

  const handleSeekVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.volume = Number(event.target.value);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  if (!currentTrack) {
    return null;
  }

  const { author, album } = currentTrack;

  return (
    <div className={styles.bar}>
      <div className={styles.barContent}>
        <div className={styles.barTimer}>
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
        <audio
          src={currentTrack.track_file}
          ref={audioRef}
          onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        />
        <ProgressBar
          max={duration}
          value={currentTime}
          step={0.01}
          onChange={handleSeek}
        />
        <div className={styles.barPlayerBlock}>
          <div className={styles.barPlayer}>
            <Controls isPlaying={isPlaying} togglePlay={togglePlay} />
            <TrackPlay author={author} album={album} />
          </div>
          <Volume
            step={0.01}
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Bar;

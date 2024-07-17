"use client";
import Controls from "@/components/Controls/Controls";
import TrackPlay from "@/components/TrackPlay/TrackPlay";
import Volume from "@/components/Volume/Volume";
import styles from "./Bar.module.css";
import { useEffect, useRef, useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import { formatTime } from "@/utils/formatTime";
import { usePlayerState } from "@/contexts/PlayerStateContext";
import { useAppSelector } from "@/hooks";

const Bar = () => {
  const currentTrack = useAppSelector((state) => state.playlist.currentTrack);

  // const currentTrackIndex = playlist.findIndex((track) => track.id === state.currentTrack?.id)

  const [currentTime, setCurrentTime] = useState<number>(0);
  const { isPlaying, setIsPlaying } = usePlayerState();
  const [volume, setVolume] = useState<number>(0.5);
  const [isLoop, setIsLoop] = useState<boolean>(false);

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

  const toggleLoop = () => {
    if (audioRef.current) {
      if (!isLoop) {
        audioRef.current.loop = true;
      } else {
        audioRef.current.loop = false;
      }
    }
    setIsLoop((prev) => !prev);
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(event.target.value);
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

  /*   const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);

  const handleEnded = () => {
      if (currentTrackIndex < tracks.length - 1) {
          setCurrentTrackIndex(currentTrackIndex + 1);
      } else {
          setCurrentTrackIndex(0);
      }
  };

  useEffect(() => {
    
      const audio = audioRef.current;
      audio.src = tracks[currentTrackIndex].url;
      audio.addEventListener('ended', handleEnded);

      audio.play();

      return () => {
          audio.removeEventListener('ended', handleEnded);
      };
  }, [currentTrackIndex, playlist]); */

  return (
    <div className={styles.bar}>
      <div className={styles.barContent}>
        <div className={styles.barTimer}>
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
        <audio
          autoPlay
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
            <Controls
              isPlaying={isPlaying}
              togglePlay={togglePlay}
              isLoop={isLoop}
              toggleLoop={toggleLoop}
            />
            <TrackPlay author={author} album={album} />
          </div>
          <Volume
            step={0.01}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default Bar;

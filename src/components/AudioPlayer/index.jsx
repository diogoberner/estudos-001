import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

const AudioPlayer = forwardRef(({ url }, ref) => {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(url);

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, [url]);

  useImperativeHandle(ref, () => {
    const audio = audioRef.current;

    return {
      play: () => audio.play(),
      pause: () => audio.pause(),
      stop: () => {
        audio.pause();
        audio.currentTime = 0;
      },
      setVolume: (value) => {
        if (!audio) return;

        let newVolume = audio.volume + value;

        newVolume = Math.max(0, Math.min(1, newVolume));

        audio.volume = newVolume;
      },
      getCurrentTime: () => console.log(audio.currentTime),
      setCurrentTime: (value) => (audio.currentTime = value),
      isPlaying: () => console.log(!audio.paused),
    };
  });

  return <div>AudioPlayer</div>;
});

export default AudioPlayer;

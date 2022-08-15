import { useEffect, useState } from "react";

const useSound = (url, options) => {
  const [sound, setSound] = useState(false);

  useEffect(() => {
    const audio = new Audio(url);

    audio.load();
    audio.volume = options.volume;
    setSound(audio);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return () => {
    if (sound) {
      sound.play();
    }
    setTimeout(() => {
      sound.pause();
      sound.currentTime = 0;
    }, options.timeout);
  };
};

export default useSound;

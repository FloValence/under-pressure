import React, { useCallback, useEffect, useState } from "react";

import Exercice from "@components/Exercice";
import Header from "@components/Header";
import Welcome from "@components/Welcome";
import Victory from "@components/Victory";

import { msToText } from "@modules/utils/msToTime";

import { exos } from "./exos";

import { SessionWrapper } from "./styled";

const Session: React.FC = () => {
  const [time, setTime] = useState(0);
  const [currentExo, setCurrentExo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVictor, setIsVictor] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const onStopTimer = useCallback(() => {
    setIsPlaying(false);
  }, [setIsPlaying]);
  const onGoToNext = useCallback(() => {
    if (exos.length - 1 > currentExo) {
      setCurrentExo(currentExo + 1);
      setIsPlaying(true);
      return;
    }

    setIsPlaying(false);
    setIsVictor(true);
  }, [currentExo]);

  const onStart = useCallback(() => {
    setHasStarted(true);
    setIsPlaying(true);
  }, []);

  const tickTime = useCallback(() => {
    if (isPlaying) {
      setTime((currentTime) => currentTime + 100);
    }
  }, [isPlaying]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying) {
        tickTime();
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [isPlaying]);

  const onTweet = useCallback(() => {
    alert(`Tweet: I'm at ${msToText(time)}`);
  }, [time]);

  const onFacebook = useCallback(() => {
    alert(`Your new status: I'm at ${msToText(time)}, under pressure`);
  }, [time]);

  if (!hasStarted) {
    return <Welcome onStart={onStart} />;
  }

  if (isVictor) {
    return <Victory time={time} />;
  }

  return (
    <SessionWrapper>
      <Header
        time={time}
        onFacebookShare={onFacebook}
        onTwitterShare={onTweet}
      />
      <Exercice
        key={currentExo}
        exo={exos[currentExo]}
        onStopTimer={onStopTimer}
        onGoToNext={onGoToNext}
      />
    </SessionWrapper>
  );
};

export default Session;

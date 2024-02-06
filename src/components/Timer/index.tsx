import React, { useEffect, useState } from 'react'
import styles from "./styles.module.scss";
import { useStopwatch } from 'react-timer-hook';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';


const Timer = () => {
  const { startStopwatch }:{startStopwatch: boolean} = useSelector((state: RootState) => state.text);
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });

  if(startStopwatch && !isRunning) start();
  // const minutes = Math.floor(timer/60);
  // const seconds = timer;

  const secondsString = String(seconds).length === 1 ? `0${seconds}` : String(seconds);
  const minutesString = String(minutes).length === 1 ? `0${minutes}` : String(minutes);

  return (
    <div className={styles.timer}>
      {minutesString}:{secondsString}
    </div>
  )
}

export default Timer
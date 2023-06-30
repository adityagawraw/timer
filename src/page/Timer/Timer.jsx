import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import classes from "./Timer.module.css";
import {RxTrackNext} from "react-icons/rx";
import {TfiPlus} from "react-icons/tfi"

const Timer = () => {
  const [timer, setTimer] = useState(false);
  const [timeDuration, setTimeDuration] = useState(30);

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer"></div>;
    }
    return (
      <div className={classes.timerSection}>
        {remainingTime / 60 < 10 ? (
          <span>0{Math.floor(remainingTime / 60)} </span>
        ) : (
          <span>{Math.floor(remainingTime / 60)}</span>
        )}
        : {" "}
        {remainingTime % 60 < 10 ? (
          <span>0{remainingTime % 60} </span>
        ) : (
          <span>{remainingTime % 60}</span>
        )}
      </div>
    );
  };

  return (
    <div className={classes.mainSection}>
        
      {timer ?(
        <>
        <p className={classes.heading1}>Routine starting in...</p>
        <p className={classes.subHeading1}> Subheading here</p>
        <CountdownCircleTimer
          isPlaying={timer}
          duration={timeDuration}
          colors={["#6c3e77"]}
          colorsTime={[10]}
          onComplete={() => {
            setTimer(false);
            alert("Timer ended!!")
          }}
        >
          {renderTime}
        </CountdownCircleTimer>
        </>
      ):<>
      <p className={classes.heading1}>Click the button  to start thr timer </p>
      </>}
      <div className={classes.buttonSection}>
        {!timer ? (
          <button
          className={classes.buttons}
            onClick={() => {
              setTimeDuration(30);
              setTimer(true);
            }}
          >
            Start timer
          </button>
        ) : (
          <button
          className={classes.buttons}
            onClick={() => {
              setTimeDuration((prev) => prev + 10);
            }}
          >
            <TfiPlus/>
            10 sec
          </button>
        )}
        {timer && (
          <button
          className={classes.buttons}
            onClick={() => {
              setTimeDuration(1);
              setTimer(false);
            }}
          >
           < RxTrackNext/>
            <span></span>Skip
          </button>
        )}
      </div>
    </div>
  );
};

export default Timer;

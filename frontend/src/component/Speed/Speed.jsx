import React, { useState, useEffect } from "react";
import "./Speed.css";

const Speed = () => {
  const [timer, setTimer] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [distance, setDistance] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [running, setRunning] = useState(false);
  const [moving, setMoving] = useState(false);

  const handleStart = () => {
    setElapsedTime(0); // Reset elapsed time to 0 when starting
    setDistance(0); // Reset distance to 0 when starting
    setRunning(true);
    setTimer(
      setInterval(() => setElapsedTime((prevTime) => prevTime + 1), 1000)
    ); // Increment elapsed time every second
  };

  const handleStop = () => {
    clearInterval(timer);
    setRunning(false);
  };

  const handleReset = () => {
    clearInterval(timer);
    setRunning(false);
    setElapsedTime(0);
    setDistance(0);
    setSpeed(0);
    setMoving(false); // Reset moving state
  };

  const handleMeasure = () => {
    if (moving) {
      setDistance(speed * elapsedTime); // Calculate distance by multiplying speed and elapsed time
    }
  };

  const handleDeviceMotion = (event) => {
    if (event.acceleration) {
      const newSpeed = Math.sqrt(
        Math.pow(event.acceleration.x, 2) +
          Math.pow(event.acceleration.y, 2) +
          Math.pow(event.acceleration.z, 2)
      );
      setSpeed(newSpeed);
      setMoving(true); // Device is moving
    } else {
      setMoving(false); // Device is not moving
    }
  };

  useEffect(() => {
    if (running) {
      window.addEventListener("devicemotion", handleDeviceMotion);
    } else {
      window.removeEventListener("devicemotion", handleDeviceMotion);
    }

    return () => {
      window.removeEventListener("devicemotion", handleDeviceMotion);
    };
  }, [running]);

  useEffect(() => {
    handleMeasure(); // Calculate distance whenever speed or elapsed time changes
  }, [speed, elapsedTime]);

  const handleCalculateDistance = () => {
    if (moving) {
      setDistance(speed * elapsedTime);
    }
  };

  return (
    <div className="speedCalculatorSection">
      <section className="speedCalculator">
        <h1 className="title">Speed Calculator</h1>
        {!running ? (
          <button id="startBtn" onClick={handleStart}>
            Start Timer
          </button>
        ) : (
          <button id="stopBtn" onClick={handleStop}>
            Stop Timer
          </button>
        )}

        <button className="Resetbutton" onClick={handleReset}>
          Reset
        </button>
        <p className="time">
          Elapsed Time: <span className="timer"> {elapsedTime} </span> seconds
        </p>
        <p className="speed">
          Speed:
          <span className="timer">
            {moving ? speed.toFixed(2) + " m/s" : "Start measuring"}
          </span>
        </p>

        <button className="distancebutton" onClick={handleCalculateDistance}>
          Distance
        </button>

        <p className="distance">
          Distance: <span className="timer"> {distance.toFixed(2)} </span>
          meters
        </p>
      </section>
    </div>
  );
};

export default Speed;

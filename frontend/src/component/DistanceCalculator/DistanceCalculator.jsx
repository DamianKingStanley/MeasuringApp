import React, { useState } from "react";
import "./DistanceCalculator.css";

const DistanceCalculator = () => {
  const [startPoint, setStartPoint] = useState(null);
  const [endPoint, setEndPoint] = useState(null);
  const [distance, setDistance] = useState(null);

  const handleStart = () => {
    // Capture the coordinates of the starting point
    setStartPoint({ x: Math.random() * 100, y: Math.random() * 100 });
  };

  const handleEnd = () => {
    // Capture the coordinates of the ending point
    setEndPoint({ x: Math.random() * 100, y: Math.random() * 100 });
  };

  const calculateDistance = () => {
    if (startPoint && endPoint) {
      // Calculate distance using Euclidean distance formula
      const deltaX = endPoint.x - startPoint.x;
      const deltaY = endPoint.y - startPoint.y;
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
      setDistance(distance);
    }
  };

  const convertDistance = (distance, unit) => {
    switch (unit) {
      case "inches":
        return distance * 39.3701; // 1 meter = 39.3701 inches
      case "kilometers":
        return distance / 1000; // 1 meter = 0.001 kilometers
      case "centimeters":
        return distance * 100; // 1 meter = 100 centimeters
      default:
        return distance; // Default to meters
    }
  };

  return (
    <div className="distanceCalculatorSection">
      <section className="distanceCalculator">
        <h1 className="title">Length Calculator</h1>
        <button id="startBtn" onClick={handleStart}>
          Start Point
        </button>
        <button id="endBtn" onClick={handleEnd}>
          End Point
        </button>
        <br /> <br />
        <button className="distancebutton" onClick={calculateDistance}>
          Calculate Length
        </button>
        {distance && (
          <div>
            <p className="distance">
              Distance between points (meters):{" "}
              <span className="timer"> {distance.toFixed(2)} </span>
            </p>
            <p className="distance">
              Distance in inches:{" "}
              <span className="timer">
                {convertDistance(distance, "inches").toFixed(2)}
              </span>
            </p>
            <p className="distance">
              Distance in kilometers:{" "}
              <span className="timer">
                {convertDistance(distance, "kilometers").toFixed(2)}
              </span>
            </p>
            <p className="distance">
              Distance in centimeters:{" "}
              <span className="timer">
                {convertDistance(distance, "centimeters").toFixed(2)}
              </span>
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default DistanceCalculator;

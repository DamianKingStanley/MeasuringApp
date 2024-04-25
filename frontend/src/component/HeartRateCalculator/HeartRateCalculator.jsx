import React, { useState } from "react";
import "./HeartRateCalculator.css";
import finger from "../../assest/fingers.png";
import wrist from "../../assest/wrist.png";

const HeartRateCalculator = () => {
  const [numberOfHeartbeats, setNumberOfHeartbeats] = useState("");
  const [duration, setDuration] = useState("");
  const [heartRate, setHeartRate] = useState(null);

  const calculateHeartRate = () => {
    if (!numberOfHeartbeats || !duration) {
      alert("Please enter values for number of heartbeats and duration.");
      return;
    }

    const heartRateValue =
      (parseInt(numberOfHeartbeats, 10) / parseInt(duration, 10)) * 60;
    setHeartRate(heartRateValue.toFixed(2));
  };

  return (
    <div className="HeartBeatSection">
      <div className="steps">
        <p>How to calculate your heart rate?</p>
        <img src={finger} alt="" />
        <p>
          Number of Heartbeats: The number of heartbeats counted within a
          specific time frame (e.g., 15 seconds).
        </p>
        <img src={wrist} alt="" />

        <p>
          Duration: The duration over which the heartbeats are counted (e.g., 15
          seconds).
        </p>
      </div>
      <section>
        <h2>Heart Rate Calculator</h2>
        <div>
          <label htmlFor="numberOfHeartbeats">Number of Heartbeats:</label>{" "}
          <br />
          <input
            type="number"
            id="numberOfHeartbeats"
            value={numberOfHeartbeats}
            onChange={(e) => setNumberOfHeartbeats(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="duration">Duration (seconds):</label> <br />
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <br />
        <button id="calBtn" onClick={calculateHeartRate}>
          Calculate Heart Rate
        </button>
        {heartRate && (
          <div>
            <p>Heart Rate: {heartRate} BPM</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default HeartRateCalculator;

import "./styles.css"
import React, { useState } from "react";

function App() {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(10);
  const [randomNum, setRandomNum] = useState(5);

  const giveRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    setRandomNum(randomNumber);
  }

  return (
    <div className="hero">
      <div className="container">
        <div className="randomNum">
          <p>Random Number: <span>{randomNum}</span></p>
        </div>
      </div>
      <div className="numContainer">
        <div>
          <p>Min:</p>
          <input
            type="number"
            value={minVal}
            onChange={e => setMinVal(parseInt(e.target.value))}
          />
        </div>
        <div>
          <p>Max:</p>
          <input
            type="number"
            value={maxVal}
            onChange={e => setMaxVal(parseInt(e.target.value))}
          />
        </div>
      </div>
      <button onClick={giveRandomNumber}>Get Random Number</button>
    </div>
  );
}

export default App;


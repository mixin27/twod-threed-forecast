import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [twodNum, setTwodNum] = useState(0);
  const [threedNum, setThreedNum] = useState(0);

  function randomNumberInRange(min: number, max: number) {
    // get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const ran2D = randomNumberInRange(0, 99);
    setTwodNum(ran2D);

    const ran3D = randomNumberInRange(0, 999);
    setThreedNum(ran3D);
  }, []);

  return (
    <>
      <div className="app">
        <div className="card-container">
          <div className="card">
            <h2>2D</h2>
            <p>{twodNum < 10 ? "00" : twodNum}</p>
          </div>
          <div className="card">
            <h2>3D</h2>
            <p>{threedNum < 100 ? "000" : threedNum}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import { Core } from "./components/core";
import { FinalScreen } from "./components/FinalScreen";

function App() {
  const [points, setPoints] = useState(0);
  const [isFinished, setFinished] = useState(false);
  const [quizLength, setQuizLength] = useState();

  // Resets quiz state for replayability
  const reset = () => {
    setPoints(0);
    setFinished(false);
  };

  return (
    <div className="App">
      <div id="wrapper">
        <div id="box">
          {!isFinished ? (
            <Core
              addPoints={(value) => setPoints(points + value)}
              makeFinished={() => setFinished(true)}
              setLength={(value) => setQuizLength(value)}
            />
          ) : (
            <FinalScreen
              score={points}
              quizLength={quizLength}
              reset={() => reset()}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

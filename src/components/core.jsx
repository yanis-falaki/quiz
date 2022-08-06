import { useState } from "react";
import qList from "../Questions.jsx";

export const Core = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isRevealed, setRevealed] = useState(false);
  const [isLastQuestion, setLastQuestion] = useState(false);

  // Passing number of questions for printing score at finished state
  props.setLength(qList.length);

  const checkAnswer = (isCorrect) => {
    if (isCorrect) {
      props.addPoints(1);
    }
    setRevealed(true);
  };

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setRevealed(false);
    if (currentQuestion + 2 >= qList.length) {
      setLastQuestion(true);
    }
    if (isLastQuestion) {
      props.makeFinished();
    }
  };

  return (
    <>
      <div id="questions">
        <h1>
          Question {currentQuestion + 1}/{qList.length}
        </h1>
        <p>{qList[currentQuestion].question}</p>
        <button id="next" onClick={nextQuestion}>
          {isLastQuestion ? "Finish Quiz" : "Next Question"}
        </button>
      </div>
      <div id="answers">
        {qList[currentQuestion].answers.map((dict) => (
          <button
            className={
              "answer " +
              (isRevealed ? (dict.correct ? "correct" : "incorrect") : "")
            }
            key={dict.text}
            onClick={() => checkAnswer(dict.correct)}
          >
            {dict.text}
          </button>
        ))}
      </div>
    </>
  );
};

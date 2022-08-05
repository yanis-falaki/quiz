import { useState } from 'react';
import './App.css';
import qList from './Questions.jsx'

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isRevealed, setRevealed] = useState(false)

  const checkAnswer = isCorrect => {
    setRevealed(true)
  }

  return (
    <div className="App">
      <div id='wrapper'>
        <div id='box'>
          <div id='questions'>
            <h1>Question {currentQuestion + 1}/{qList.length}</h1>
            <p>{qList[currentQuestion].question}</p>
            <button id='next'>Next Question</button>
          </div>
          <div id='answers'>
            {qList[currentQuestion].answers.map(dict => 
              <button 
                className={'answer ' + (isRevealed ? (dict.correct ? 'correct' : 'incorrect') : "")} 
                key={dict.text} 
                onClick={() => checkAnswer(dict.correct)}>
                  {dict.text}
              </button>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

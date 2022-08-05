import './App.css';

function App() {
  return (
    <div className="App">
      <div id='wrapper'>
        <div id='question'>
          <div id='questions'>
            <h1>Question 1/4</h1>
            <p>What is the capital of France?</p>
            <button id='next'>Next Question</button>
          </div>
          <div id='answers'>
            <button className='answer'>Paris</button>
            <button className='answer'>London</button>
            <button className='answer'>Africa</button>
            <button className='answer'>Peru</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

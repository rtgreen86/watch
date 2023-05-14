import logo from './logo.svg';
import './App.css';
import Button from './Button';
import TopPanel from './TopPanel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <TopPanel>
        <Button>Today</Button>
        Randomize:
        <>
          <input type="checkbox" id="hours" checked></input><label for="hours">Hours</label><br />
          <input type="checkbox" id="minutes" checked></input><label for="minutes">Minutes</label><br />
        </>
        <Button>Random</Button>
        <button type="button"
          onClick="document.getElementById('clock3').src='analogclock.svg#2022-01-01T18:00'">18:00</button>
      </TopPanel>
    </div>
  );
}

export default App;

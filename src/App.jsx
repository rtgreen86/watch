import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Checkbox from './Checkbox';
import TopPanel from './TopPanel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TopPanel>
        <Button>Today</Button>
        Randomize:
        <>
          <Checkbox checked>Hours</Checkbox><br />
          <Checkbox checked>Minutes</Checkbox><br />
        </>
        <Button>Random</Button>
        <Button type="button"
          onClick="document.getElementById('clock3').src='analogclock.svg#2022-01-01T18:00'">18:00</Button>
      </TopPanel>
    </div>
  );
}

export default App;

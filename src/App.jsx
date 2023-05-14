import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Checkbox from './Checkbox';
import TopPanel from './TopPanel';
import AnalogClockFrame from './AnalogClockFrame';

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

      <main class="clearfix">
        <section class="column">
          <div class="analog-clock">
            <AnalogClockFrame></AnalogClockFrame>
          </div>

          <form class="digital-clock">
            <table>
              <tr>
                <td><button type="button">+</button></td>
                <td></td>
                <td><button type="button">+</button></td>
                <td><button type="button">+</button></td>
              </tr>

              <tr class="display">
                <td><input type="number" min="0" max="23" step="1" value="10" /></td>
                <td>:</td>
                <td colspan="2"><input type="number" min="0" max="60" step="1" value="33" /></td>
              </tr>

              <tr style={{ verticalAlign: 'top' }}>
                <td><button type="button">-</button></td>
                <td></td>
                <td><button type="button">-</button></td>
                <td><button type="button">-</button></td>
              </tr>
            </table>
          </form>
        </section>

        <section class="column">
          <form class="notes">
            <label for="notes">Notes:</label><br />
            <textarea id="notes"></textarea>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;

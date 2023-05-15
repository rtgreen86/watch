import './App.css';

import { useState } from 'react';

import Button from './Button';
import Checkbox from './Checkbox';
import TopPanel from './TopPanel';
import AnalogClockFrame from './AnalogClockFrame';
import DigitalClock from './DigitalClock';

function App() {
  const [date] = useState(new Date());

  return (
    <div className="App">
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
            <AnalogClockFrame date={date}></AnalogClockFrame>
          </div>
          <DigitalClock date={date}></DigitalClock>
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

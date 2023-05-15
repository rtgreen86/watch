import './App.css';

import { useState } from 'react';

import Button from './Button';
import TopPanel from './TopPanel';
import AnalogClockFrame from './AnalogClockFrame';
import DigitalClock from './DigitalClock';

function App() {
  const [date, setDate] = useState(new Date());

  const handleTodayClick = () => {
    setDate(new Date());
  }

  const [isHoursChecked, setHoursChecked] = useState(true);
  const [isMinutesChecked, setMinutesChecked] = useState(true);

  const createRandom = () => {
    const hours = isHoursChecked
      ? Math.floor(Math.random() * 23)
      : date.getHours();

    const minutes = isMinutesChecked
      ? Math.floor(Math.random() * 59)
      : date.getMinutes();

    setDate(new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      hours,
      minutes
    ));
  }

  return (
    <div className="App">
      <TopPanel>
        <button type="button" onClick={handleTodayClick}>Now</button>
        Randomize:
        <>
          <input type="checkbox" id="hours" checked={isHoursChecked} onChange={(event) => setHoursChecked(event.target.checked)}></input><label for="hours">Hours</label><br />
          <input type="checkbox" id="minutes" checked={isMinutesChecked} onChange={(event) => setMinutesChecked(event.target.checked)}></input><label for="minutes">Minutes</label><br />
        </>
        <button type="button" onClick={createRandom}>Random</button>
      </TopPanel>

      <main class="clearfix">
        <section class="column">
          <AnalogClockFrame date={date}></AnalogClockFrame>
          <DigitalClock date={date} onChange={setDate}></DigitalClock>
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

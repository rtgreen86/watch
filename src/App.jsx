import './App.css';

import { useState } from 'react';

import TopPanel from './TopPanel';
import AnalogClockFrame from './AnalogClockFrame';
import DigitalClock from './DigitalClock';
import DayTime from './DayTime';

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
      <DayTime date={date} />
      <TopPanel>
        <button key="now" type="button" onClick={handleTodayClick}>Now</button>
        <span key="randomize">Randomize:</span>
        <div key="checkboxes">
          <input type="checkbox" id="hours" checked={isHoursChecked} onChange={(event) => setHoursChecked(event.target.checked)}></input><label htmlFor="hours">Hours</label><br />
          <input type="checkbox" id="minutes" checked={isMinutesChecked} onChange={(event) => setMinutesChecked(event.target.checked)}></input><label htmlFor="minutes">Minutes</label><br />
        </div>
        <button key="random" type="button" onClick={createRandom}>Random</button>
      </TopPanel>

      <main className="clearfix">
        <section className="column">
          <AnalogClockFrame date={date}></AnalogClockFrame>
          <DigitalClock date={date} onChange={setDate}></DigitalClock>
        </section>

        <section className="column">
          <form className="notes">
            <label htmlFor="notes">Notes:</label><br />
            <textarea id="notes"></textarea>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;

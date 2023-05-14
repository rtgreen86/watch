import './TopPanel.css'

export default function TopPanel({ children }) {
  return (<header class="top-panel clearfix">
    <form>
      <ul>
        <li><button type="button" id="today">Today</button></li>
        <li>Randomize:</li>
        <li>
          <input type="checkbox" id="hours" checked></input><label for="hours">Hours</label><br />
          <input type="checkbox" id="minutes" checked></input><label for="minutes">Minutes</label><br />
      </li>
      <li><button type="button" id="randomize">Random</button></li>
      <li><button type="button"
        onClick="document.getElementById('clock3').src='analogclock.svg#2022-01-01T18:00'">18:00</button>
      </li>
    </ul>
  </form>
  </header >);
}
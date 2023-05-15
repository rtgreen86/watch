import './DigitalClock.css';

import DigitalClockInput from './DigitalClockInput';

export default function DigitalClock({ date = new Date(), onChange = () => { } }) {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const createDate = (hours = date.getHours(), minutes = date.getMinutes()) => new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    hours,
    minutes
  );

  const incrementDate = (hours = 0, minutes = 0) => createDate(date.getHours() + hours, date.getMinutes() + minutes);

  return (<form className="digital-clock">
    <table>
      <tbody>
        <tr>
          <td><button type="button" onClick={() => onChange(incrementDate(1, 0))}>+</button></td>
          <td></td>
          <td><button type="button" onClick={() => onChange(incrementDate(0, 10))}>+</button></td>
          <td><button type="button" onClick={() => onChange(incrementDate(0, 1))}>+</button></td>
        </tr>

        <tr className="display">
          <td><DigitalClockInput value={hours} onInput={(value) => onChange(createDate(value))} max={23} /></td>
          <td>:</td>
          <td colSpan="2"><DigitalClockInput value={minutes} onInput={(value) => onChange(createDate(date.getHours(), value))} max={59} /></td>
        </tr>

        <tr style={{ verticalAlign: 'top' }}>
          <td><button type="button" onClick={() => onChange(incrementDate(-1, 0))}>-</button></td>
          <td></td>
          <td><button type="button" onClick={() => onChange(incrementDate(0, -10))}>-</button></td>
          <td><button type="button" onClick={() => onChange(incrementDate(0, -1))}>-</button></td>
        </tr>
      </tbody>
    </table>
  </form>);
}

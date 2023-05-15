import './DigitalClock.css';

export default function DigitalClock({ date = new Date(), onChange = () => { } }) {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const createDate = (hours = 0, minutes = 0) => new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    hours,
    minutes
  );

  const incrementDate = (hours = 0, minutes = 0) => createDate(date.getHours() + hours, date.getMinutes() + minutes);

  const formatValue = (value) => value.toString(10).padStart(2, '0');

  return (<form class="digital-clock">
    <table>
      <tr>
        <td><button type="button" onClick={() => onChange(incrementDate(1, 0))}>+</button></td>
        <td></td>
        <td><button type="button" onClick={() => onChange(incrementDate(0, 10))}>+</button></td>
        <td><button type="button" onClick={() => onChange(incrementDate(0, 1))}>+</button></td>
      </tr>

      <tr class="display">
        <td><input type="text" value={formatValue(hours)} /></td>
        <td>:</td>
        <td colSpan="2"><input type="text" value={formatValue(minutes)} /></td>
      </tr>

      <tr style={{ verticalAlign: 'top' }}>
        <td><button type="button" onClick={() => onChange(incrementDate(-1, 0))}>-</button></td>
        <td></td>
        <td><button type="button" onClick={() => onChange(incrementDate(0, -10))}>-</button></td>
        <td><button type="button" onClick={() => onChange(incrementDate(0, -1))}>-</button></td>
      </tr>
    </table>
  </form>);
}

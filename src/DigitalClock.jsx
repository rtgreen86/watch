import './DigitalClock.css';

export default function DigitalClock({ date = new Date(), onChange = () => {} }) {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const handlePlusHourClick = () => {
    const newDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours() + 1,
      date.getMinutes(),
    );
    console.log('1');
    onChange(newDate);
  }


  return (<form class="digital-clock">
    <table>
      <tr>
        <td><button type="button" onClick={handlePlusHourClick}>+</button></td>
        <td></td>
        <td><button type="button">+</button></td>
        <td><button type="button">+</button></td>
      </tr>

      <tr class="display">
        <td><input type="number" min="0" max="23" step="1" value={hours} /></td>
        <td>:</td>
        <td colSpan="2"><input type="number" min="0" max="60" step="1" value={minutes} /></td>
      </tr>

      <tr style={{ verticalAlign: 'top' }}>
        <td><button type="button">-</button></td>
        <td></td>
        <td><button type="button">-</button></td>
        <td><button type="button">-</button></td>
      </tr>
    </table>
  </form>);
}

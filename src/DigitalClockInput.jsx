import './DigitalClockInput.css';

export default function DigitalClockInput({ value = 0, onInput = () => {}, min = 0, max = 99}) {
  const formattedValue = value.toString(10).padStart(2, '0');

  const handleInput = (event) => {
    const newValue = Number.parseInt(event.target.value);
    onInput(!isNaN(newValue) && newValue >= min && newValue <= max
      ? newValue
      : value
    );
  }

  return <input type="text" value={formattedValue} onInput={handleInput}/>;
}
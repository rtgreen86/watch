import './AnalogClockFrame.css';

export default function AnalogClockFrame({ date = new Date() }) {
  const src = `analogclock.svg#${date.toISOString()}`;
  return (<div className="analog-clock">
    <iframe id="clock3" src={src} title="clock"></iframe>
  </div>);
}
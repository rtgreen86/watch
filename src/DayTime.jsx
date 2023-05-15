import { useEffect } from "react";

export default function DayTime({ date = new Date() }) {
  const hours = date.getHours();

  const color = hours > 5 && hours < 19
    ? 'lightblue'
    : 'blue';

  useEffect(() => {
    document.body.style['background-color'] = color;
  }, [color]);
}
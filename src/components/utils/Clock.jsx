import { useState, useEffect } from 'react';
import './Clock.css'; // Optional: Import a CSS file for styling

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timerID);
  }, []);

  return (
    <div className="clock">
      <p>{time.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })}</p>
    </div>
  );
}

export default Clock;
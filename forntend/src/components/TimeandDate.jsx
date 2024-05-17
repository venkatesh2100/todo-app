import React, { useState, useEffect } from 'react';

export default function CurrentDateTime() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = dayNames[currentDateTime.getDay()];
  const time = currentDateTime.toLocaleTimeString();

  return (
    <div>
      <h2>Today is {day}</h2>
      <h3>{time}</h3>
    </div>
  );
}

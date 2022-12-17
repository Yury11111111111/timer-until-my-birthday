import { useState } from "react";
import "./App.css";

function App() {
  
  localStorage.setItem("year", 2023);

  const [year, setYear] = useState(+localStorage.getItem("year"));

  const [date, setDate] = useState(new Date(year, 7, 9));

  const [dateNow, setDateNow] = useState(Date.now());

  const [time, setTime] = useState(~~((date - dateNow) / 1000));

  const [days, setDays] = useState(Math.floor(time / (60 * 60 * 24)));
  const [hours, setHours] = useState(Math.floor((time / (60 * 60)) % 24));
  const [minuts, setMinuts] = useState(Math.floor((time / 60) % 60));
  const [seconds, setSeconds] = useState(time % 60);

  const changeYear = setInterval(() => {
    clearInterval(changeYear);
    if (time < 0) {
      localStorage.setItem("year", () => year + 1);
      setYear(+localStorage.getItem("year"));
      setDate(new Date(year, 7, 9));
      setTime(~~((date - dateNow) / 1000));
    }
  }, 1_000);

  const interval = setInterval(() => {
    setDays(Math.floor(time / (60 * 60 * 24)));
    setHours(Math.floor((time / (60 * 60)) % 24));
    setMinuts(Math.floor((time / 60) % 60));
    setSeconds(time % 60);
    setDateNow(Date.now());
    clearInterval(interval);
    setTime(~~((date - dateNow) / 1000));
  }, 990);

  return (
    <div className="App">
      <h1>До моего дня рождения осталось</h1>
      {days} : {hours} : {minuts} : {seconds}
    </div>
  );
}

export default App;

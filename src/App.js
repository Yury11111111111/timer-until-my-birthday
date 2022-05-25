import { useState } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState(new Date(2022, 7, 9));

  const [dateNow, setDateNow] = useState(Date.now());

  const [time, setTime] = useState(~~((date - dateNow) / 1000));

  const days = Math.floor(time / (60 * 60 * 24))
  const hours = Math.floor((time / (60 * 60)) % 24);
  const minuts = Math.floor((time / 60) % 60);
  const seconds = time % 60;

  const interval = setInterval(() => {
    setDateNow(Date.now());
    clearInterval(interval)
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

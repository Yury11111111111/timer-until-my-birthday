import { useState } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState(new Date(2022, 7, 9));

  const [dateNow, setDateNow] = useState(Date.now());

  const [time, setTime] = useState(~~((date - dateNow) / 1000));

  const days = Math.floor(time / 3600 / 24)
  const hours = Math.floor(days / 24);
  const minuts = Math.floor((time - hours * 3600 - days * 3600 * 24) / 60);
  const seconds = time - hours * 3600 - minuts * 60 - days * 3600 * 24;

  const interval = setInterval(() => {
    setDateNow(Date.now());
    clearInterval(interval)
    setTime(~~((date - dateNow) / 1000));
  }, 1000);

  return (
    <div className="App">
      <h1>До моего дня рожния осталось</h1>
      {days} : {hours} : {minuts} : {seconds}
    </div>
  );
}

export default App;

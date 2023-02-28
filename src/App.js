import './App.css';
import './styles/clock.css';
import {Clock} from './components/Clock'
import { useState } from 'react';

function App() {

  const [toggleClock, setToggleClock] = useState(false);

  const onToggleClick = () => {
    setToggleClock(false);
  }

  const onPreciseClick = () => {
    setToggleClock(true);
  }

  return (
    <div className="App">
      <button onClick={onToggleClick} >Toggle clock</button>
      <button onClick={onPreciseClick}>Toggle precise mode</button>
      <Clock isPrecise = {toggleClock} />
    </div>
  );
}

export default App;




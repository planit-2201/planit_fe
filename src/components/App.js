import '../styles/App.css';
import Nav from './Nav'
import MainInfo from './MainInfo'
import ShowerInfo from './ShowerInfo'
import ItemCounters from './ItemCounters'
import { useState } from 'react';
import FindUser from './FindUser';


function App() {

  const [todaysSeconds, setTodaysSeconds] = useState(0);
  const [todaysMinutes, setTodaysMinutes] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [containerCount, setContainerCount] = useState(0);
  const [bagCount, setBagCount] = useState(0);
  const [strawCount, setStrawCount] = useState(0);
  const [weeklyAverageShowerTime, setWeeklyAverageShowerTime] = useState(0);
  const [thirtyDayAverageShowerTime, setThirtyDayAverageShowerTime] = useState(0);
  const [username, setUsername] = useState('');

  return (
    <main className="App">
      <FindUser
        weeklyAverageShowerTime={weeklyAverageShowerTime}
        setWeeklyAverageShowerTime={setWeeklyAverageShowerTime}
        setThirtyDayAverageShowerTime={setThirtyDayAverageShowerTime}
        thirtyDayAverageShowerTime={thirtyDayAverageShowerTime}
        setUsername={setUsername}
      />
      <section className='nav-bar'>
        <Nav
          username={username}
        />
      </section>
      <section className='main-content'>
        <MainInfo />
        <ShowerInfo
          todaysSeconds={todaysSeconds}
          setTodaysSeconds={setTodaysSeconds}
          todaysMinutes={todaysMinutes}
          setTodaysMinutes={setTodaysMinutes}
          weeklyAverageShowerTime={weeklyAverageShowerTime}
          setTotalSeconds={setTotalSeconds}
          totalSeconds={totalSeconds}
          setTotalMinutes={setTotalMinutes}
          totalMinutes={totalMinutes}
          setThirtyDayAverageShowerTime={setThirtyDayAverageShowerTime}
          thirtyDayAverageShowerTime={thirtyDayAverageShowerTime}
        />
      </section>
      <section className='item-counters'>
        <ItemCounters
          containerCount={containerCount}
          setContainerCount={setContainerCount}
          bagCount={bagCount}
          setBagCount={setBagCount}
          strawCount={strawCount}
          setStrawCount={setStrawCount}
          totalSeconds={totalSeconds}
          totalMinutes={totalMinutes}
        />
      </section>
    </main>
  );
}

export default App;

import '../styles/App.css';
import Nav from './Nav'
import MainInfo from './MainInfo'
import ShowerInfo from './ShowerInfo'
import ItemCounters from './ItemCounters'
import { useQuery, gql } from '@apollo/client';
import { useState, useEffect } from 'react';
import FindUser from './FindUser';


function App() {

  const [todaysSeconds, setTodaysSeconds] = useState(0);
  const [todaysMinutes, setTodaysMinutes] = useState(0);
  const [containerCount, setContainerCount] = useState(0);
  const [bagCount, setBagCount] = useState(0);
  const [strawCount, setStrawCount] = useState(0);
  const [weeklyAverageShowerTime, setWeeklyAverageShowerTime] = useState(0);

  return (
    <main className="App">
      <FindUser 
        weeklyAverageShowerTime={weeklyAverageShowerTime}
        setWeeklyAverageShowerTime={setWeeklyAverageShowerTime}
      />
      <section className='nav-bar'>
        <Nav />
      </section>
      <section className='main-content'>
        <MainInfo />
        <ShowerInfo
          todaysSeconds={todaysSeconds}
          setTodaysSeconds={setTodaysSeconds}
          todaysMinutes={todaysMinutes}
          setTodaysMinutes={setTodaysMinutes}
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
        />
      </section>
    </main>
  );
}

export default App;

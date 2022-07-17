import '../styles/App.css';
import Nav from './Nav';
import MainInfo from './MainInfo';
import ShowerInfo from './ShowerInfo';
import ItemCounters from './ItemCounters';
import ShowerMinInfo from './ShowerMinInfo';
import RecyclingInfo from './RecyclingInfo';
import CompostingInfo from './CompostingInfo';
import { useState } from 'react';
import FindUser from './FindUser';
import { Route, Switch } from 'react-router-dom';



function App() {

  const [todaysSeconds, setTodaysSeconds] = useState(0);
  const [todaysMinutes, setTodaysMinutes] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [bottleCount, setBottleCount] = useState(0);
  const [bagCount, setBagCount] = useState(0);
  const [strawCount, setStrawCount] = useState(0);
  const [weeklyAverageShowerTime, setWeeklyAverageShowerTime] = useState(0);
  const [thirtyDayAverageShowerTime, setThirtyDayAverageShowerTime] = useState(0);
  const [username, setUsername] = useState('');
  const [currentPage, setCurrentPage] = useState('home');

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
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        />
      </section>
      <Switch>
        <Route exact path="/" render={() => {
          return <div>
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
                bottleCount={bottleCount}
                setBottleCount={setBottleCount}
                bagCount={bagCount}
                setBagCount={setBagCount}
                strawCount={strawCount}
                setStrawCount={setStrawCount}
                totalSeconds={totalSeconds}
                totalMinutes={totalMinutes}
              />
            </section>
          </div>
        }} />
        <Route exact path="/shower" render={() => {
          return <div>
            <ShowerMinInfo />
          </div>
        }} />
        <Route exact path="/recycling" render={() => {
          return <div>
            <RecyclingInfo />
          </div>
        }} />
        <Route exact path="/composting" render={() => {
          return <div>
            <CompostingInfo />
          </div>
        }} />
      </Switch>
    </main>
  );
}

export default App;

import '../styles/App.css';
import Nav from './Nav';
import MainInfo from './MainInfo';
import ShowerInfo from './ShowerInfo';
import ItemCounters from './ItemCounters';
import ShowerMinInfo from './ShowerMinInfo';
import BottleInfo from './BottleInfo';
import StrawInfo from './StrawInfo';
import BagInfo from './BagInfo';
import { useState } from 'react';
import FindUser from './FindUser';
import FindUserRecords from './FindUserRecords'
import { Route, Switch } from 'react-router-dom';
import Error from './Error';

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
  const [allRecords, setAllRecords] = useState([]);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [thirtyDayAvgGallons, setThirtyDayAvgGallons] = useState(0);
  const [thirtyDayAvgStraws, setThirtyDayAvgStraws] = useState(0);
  const [thirtyDayAvgBags, setThirtyDayAvgBags] = useState(0);
  const [thirtyDayAvgBottles, setThirtyDayAvgBottles] = useState(0);
  const [isDailyRecordSubmitted, setDailyRecordSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <>
    {!isError && 
    <main className="App">
      <FindUser
        weeklyAverageShowerTime={weeklyAverageShowerTime}
        setWeeklyAverageShowerTime={setWeeklyAverageShowerTime}
        setThirtyDayAverageShowerTime={setThirtyDayAverageShowerTime}
        thirtyDayAverageShowerTime={thirtyDayAverageShowerTime}
        setUsername={setUsername}
        setThirtyDayAvgGallons={setThirtyDayAvgGallons}
        setThirtyDayAvgStraws={setThirtyDayAvgStraws}
        setThirtyDayAvgBags={setThirtyDayAvgBags}
        setThirtyDayAvgBottles={setThirtyDayAvgBottles}
        isError={isError}
        setIsError={setIsError}
        />
      <FindUserRecords
        allRecords={allRecords}
        setAllRecords={setAllRecords}
        isDailyRecordSubmitted={isDailyRecordSubmitted}
        setDailyRecordSubmitted={setDailyRecordSubmitted}
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
                isTimerRunning={isTimerRunning}
                setIsTimerRunning={setIsTimerRunning}
                allRecords={allRecords}
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
                allRecords={allRecords}
                isTimerRunning={isTimerRunning}
                setIsTimerRunning={setIsTimerRunning}
                isDailyRecordSubmitted={isDailyRecordSubmitted}
                setDailyRecordSubmitted={setDailyRecordSubmitted}
              />
            </section>
          </div>
        }} />
        <Route exact path="/shower" render={() => {
          return <div>
            <ShowerMinInfo
              username={username}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              thirtyDayAvgGallons={thirtyDayAvgGallons}
            />
          </div>
        }} />
        <Route exact path="/bottles" render={() => {
          return <div>
            <BottleInfo
              username={username}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              thirtyDayAvgBottles={thirtyDayAvgBottles}
            />
          </div>
        }} />
        <Route exact path="/straws" render={() => {
          return <div>
            <StrawInfo
              username={username}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              thirtyDayAvgStraws={thirtyDayAvgStraws}
            />
          </div>
        }} />
        <Route exact path="/bags" render={() => {
          return <div>
            <BagInfo
              username={username}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              thirtyDayAvgBags={thirtyDayAvgBags}
            />
          </div>
        }} />
        <Route path="*" component={Error} />
      </Switch>
    </main>
    }
    {isError && <p>Hello! There was an issue loading your data, please try refreshing this page</p>}
    </>
  );
}

export default App;

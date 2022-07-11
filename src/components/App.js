import '../styles/App.css';
import Nav from './Nav'
import MainInfo from './MainInfo'
import ShowerInfo from './ShowerInfo'
import ItemCounters from './ItemCounters'
import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';


function App() {

  const [todaysSeconds, setTodaysSeconds] = useState(0);
  const [todaysMinutes, setTodaysMinutes] = useState(0);
  const [containerCount, setContainerCount] = useState(0);
  const [bagCount, setBagCount] = useState(0);
  const [strawCount, setStrawCount] = useState(0);


  const GET_USER = gql`
    query getUser {
      getUser(id: "6") {
        id
        username
        flowrate
        weeklyAverageShowerTime
        weeklyAverageWaterUsage
      }
    }
  `;

  function FindUser() {
    const { loading, error, data } = useQuery(GET_USER);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return <p>{data.getUser.username}</p>
  }


  return (
    <main className="App">
      <FindUser />
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

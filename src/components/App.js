import '../styles/App.css';
import Nav from './Nav'
import MainInfo from './MainInfo'
import ShowerInfo from './ShowerInfo'
import ItemCounters from './ItemCounters'
import { useQuery, gql } from '@apollo/client';


function App() {

  const GET_USER = gql`
    query getUser {
      getUser(id: "1") {
        id
        username
        flowrate
      }
    }
  `;

  function FindUser() {
    const { loading, error, data } = useQuery(GET_USER);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return <p>data</p>
  }


  return (
    <main className="App">
      <FindUser />
      <section className='nav-bar'>
        <Nav />
      </section>
      <section className='main-content'>
        <MainInfo />
        <ShowerInfo />
      </section>
      <section className='item-counters'>
        <ItemCounters />
      </section>
    </main>
  );
}

export default App;

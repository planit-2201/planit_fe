import '../styles/App.css';
import Nav from './Nav'
import MainInfo from './MainInfo'
import ShowerInfo from './ShowerInfo'
import ItemCounters from './ItemCounters'

function App() {
  return (
    <main className="App">
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

import '../styles/MainInfo.css'

const MainInfo = () => {
  return (
    <section className='info-container'>
      <div className='main-info-text'>
        <h1 className='main-info-title'>Did You Know...</h1>
        <h3 className="shower-fact">The average American uses 5,336 gallons of water on showers per year?</h3>
        <h3 className='shower-fact'>If the average shower was 5 minutes long, that number would drop to 3650!</h3>
      </div>
      <div className='main-info-photo'>
        <img src='../assets/save-water-pic.jpeg' alt='a graphic of a hand holding the earth with a spigot on the side of it, with a drop of water coming out containing text reading World Water Day' className='main-info-pic'/>
      </div>
    </section>
  )
}

export default MainInfo;

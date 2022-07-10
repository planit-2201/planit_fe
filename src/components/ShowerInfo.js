import '../styles/ShowerInfo.css'

const ShowerInfo = () => {
  return (
    <section className='info-container'>
      <div className='shower-info-text'>
        <h1 className='shower-info-title'>Need Help Shortening Your Time?</h1>
        <ul className='link-list'>
          <li className='link'>some link or tip</li>
          <li className='link'>some link or tip</li>
          <li className='link'>some link or tip</li>
        </ul>
      </div>
      <div className='shower-data'>
        <div className='shower-data-text-box'>
          <h3 className='shower-data-text'>Average</h3>
          <h3 className='shower-data-text'>Today</h3>
          <h3 className='shower-data-text'>Yesterday</h3>
        </div>
        <div className='shower-data-num-box'>
          <h3 className='shower-data-num'>6:19</h3>
          <h3 className='shower-data-num'>5:26</h3>
          <h3 className='shower-data-num'>7:12</h3>
        </div>
      </div>
    </section>
  )
}

export default ShowerInfo;

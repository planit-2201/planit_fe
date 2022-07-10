import '../styles/ShowerInfo.css'
import { useStopwatch } from 'react-timer-hook';

const ShowerInfo = () => {

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });

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
      <div style={{textAlign: 'center'}}>
        <p>Your Shower Timer</p>
        <div style={{fontSize: '100px'}}>
          <span>{minutes}</span>:<span>{seconds}</span>
        </div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </section>
  )
}

export default ShowerInfo;

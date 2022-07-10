import '../styles/ShowerInfo.css'
import { useStopwatch } from 'react-timer-hook';
import { useEffect } from 'react';

const ShowerInfo = ({ todaysSeconds, todaysMinutes, setTodaysSeconds, setTodaysMinutes }) => {

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

  useEffect(() => {
    setTodaysSeconds(seconds)
  }, [seconds])

  useEffect(() => {
    setTodaysMinutes(minutes)
  }, [minutes])

  return (
    <section className='info-container'>
      <div style={{textAlign: 'center'}}>
        <p>Your Shower Timer</p>
        <div style={{fontSize: '100px'}}>
          <span>{minutes}</span>:<span>{seconds}</span>
        </div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div className='shower-data'>
        <div className='shower-data-text-box'>
          <h3 className='shower-data-text'>Average</h3>
          <h3 className='shower-data-text'>Today</h3>
          <h3 className='shower-data-text'>Yesterday</h3>
        </div>
        <div className='shower-data-num-box'>
          <h3 className='shower-data-num'>6:19</h3>
          <h3 className='shower-data-num'>{todaysMinutes}:{todaysSeconds}</h3>
          <h3 className='shower-data-num'>7:12</h3>
        </div>
      </div>
    </section>
  )
}


// Add button to record time, or auto post at midnight?

export default ShowerInfo;

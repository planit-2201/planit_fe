import '../styles/ShowerInfo.css'
import { useStopwatch } from 'react-timer-hook';
import { useEffect } from 'react';

const ShowerInfo = ({ 
  todaysSeconds, 
  todaysMinutes, 
  setTodaysSeconds, 
  setTodaysMinutes, 
  setTotalSeconds, 
  totalSeconds, 
  setTotalMinutes, 
  totalMinutes, 
  weeklyAverageShowerTime, 
  thirtyDayAverageShowerTime }) => {

  let {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });

  useEffect(() => {
    if (todaysSeconds < 10) {
      setTodaysSeconds('0' + seconds)
    } else {
      setTodaysSeconds(seconds)
    }
  }, [seconds])

  useEffect(() => {
    setTodaysMinutes(minutes)
  }, [minutes])

  const setTotalShowerTime = (sec, min) => {
    setTotalSeconds(sec)
    setTotalMinutes(min)
  }

  

  return (
    <section className='info-container'>
      <div className='timer-container'style={{textAlign: 'center'}}>
        <p className='timer-title'>Your Shower Timer</p>
        <div className='timer-nums'style={{fontSize: '100px'}}>
          <span>{minutes}</span>:<span>{seconds}</span>
        </div>
        <div className='timer-btn-container'>
          <button className='timer-btn' onClick={start}>Start</button>
          <button className='timer-btn' onClick={() => {pause(); setTotalShowerTime(todaysSeconds, todaysMinutes)}}>Pause</button>
          <button className='timer-btn' onClick={() => {reset(); pause()}}>Reset</button>
        </div>
      </div>
      <div className='shower-data'>
        <div className='shower-data-text-box'>
          <h3 className='shower-data-text'>Today</h3>
          <h3 className='shower-data-text'>7 Day Average</h3>
          <h3 className='shower-data-text'>30 Day Average</h3>
        </div>
        <div className='shower-data-num-box'>
          <h3 className='shower-data-num'>{totalMinutes}:{totalSeconds}</h3>
          <h3 className='shower-data-num'>{Math.floor(weeklyAverageShowerTime/60)}:{weeklyAverageShowerTime % 60}</h3>
          <h3 className='shower-data-num'>{Math.floor(thirtyDayAverageShowerTime/60)}:{thirtyDayAverageShowerTime % 60}</h3>
        </div>
      </div>
    </section>
  )
}

// Add button to record time, or auto post at midnight?

// Fetch user's average time and weekly total. Display them.

export default ShowerInfo;

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

  // useEffect(() => {
  //   if (todaysSeconds < 9) {
  //     setTodaysSeconds('0' + seconds)
  //   } else {
  //     setTodaysSeconds(seconds)
  //   }
  // }, [seconds])

  useEffect(() => {
    setTodaysMinutes(minutes)
  }, [minutes])

  const setTotalShowerTime = (sec, min) => {
    setTotalSeconds(sec)
    setTotalMinutes(min)
  }

  const startShower = () => {
    if (!isRunning) {
      start()
    }
  }

  const resetShower = () => {
    setTotalSeconds(0)
    setTotalMinutes(0)
    reset();
    pause();
  }


  return (
    <section className='info-container'>
      <div className='timer-container'style={{textAlign: 'center'}}>
        <p className='timer-title'>Your Shower Timer</p>
        <div className='timer-nums'style={{fontSize: '100px'}}>
          <span>{minutes}</span>:<span>{String(seconds).padStart(2, '0')}</span>
        </div>
        <div className='timer-btn-container'>
          <button className='timer-btn' onClick={startShower}>Start</button>
          <button className='timer-btn' onClick={() => {pause(); setTotalShowerTime(todaysSeconds, todaysMinutes)}}>Pause</button>
          <button className='timer-btn' onClick={() => {pause(); resetShower()}}>Reset</button>
        </div>
      </div>
      <div className='shower-data'>
        <div className='shower-data-text-box'>
          <h3 className='shower-data-text'>Today</h3>
          <h3 className='shower-data-text'>7 Day Average</h3>
          <h3 className='shower-data-text'>30 Day Average</h3>
        </div>
        <div className='shower-data-num-box'>
          <h3 className='shower-data-num'>{todaysMinutes}:{String(todaysSeconds).padStart(2, '0')}</h3>
          <h3 className='shower-data-num'>{Math.floor(weeklyAverageShowerTime/60)}:{String(weeklyAverageShowerTime % 60).padStart(2, '0')}</h3>
          <h3 className='shower-data-num'>{Math.floor(thirtyDayAverageShowerTime/60)}:{String(thirtyDayAverageShowerTime % 60).padStart(2, '0')}</h3>
        </div>
      </div>
    </section>
  )
}

// If a user clicks start while the timer is already running, don't reset it.
  // Fixed - used the built in isRunning
// As the timer changes, reflect the new state in the UI
  // Fixed - had to JavaScript interpolate a different piece of state to reflect this
// When the timer is reset, then the user clicks 'start' the time resets to the last time. Fix this
  // Fixed - had to add a helper function that resets the total minutes and seconds in state back to 0,
  // Put the reset function inside of this helper function
  // Had to change the order in which the two functions were invoked when the reset button is clicked

export default ShowerInfo;

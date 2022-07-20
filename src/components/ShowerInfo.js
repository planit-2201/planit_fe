import '../styles/ShowerInfo.css'
import { useStopwatch } from 'react-timer-hook';
import { useEffect } from 'react';
import dayjs from 'dayjs';

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
  thirtyDayAverageShowerTime,
  isTimerRunning,
  setIsTimerRunning,
  allRecords }) => {

  let {
    seconds,
    minutes,
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

  const setTotalShowerTime = (sec, min) => {
    setTotalSeconds(sec)
    setTotalMinutes(min)
  }

  const startShower = () => {
    if (!isRunning) {
      start()
      setIsTimerRunning(true)
    }
  }

  const resetShower = () => {
    reset(0, false);
    setTotalSeconds(0)
    setTotalMinutes(0)
    setIsTimerRunning(false)
  }

  const setTodayShowerTime = () => {
    let findDate = allRecords.find(record => record.date === dayjs(Date()).format('YYYY-MM-DD'))
    if (findDate) {
      return <h3 className='shower-data-num'>{Math.floor(findDate.showerTime/60)}:{String(findDate.showerTime % 60).padStart(2, '0')}</h3>
    } else {
      return <h3 className='shower-data-num'>{todaysMinutes}:{String(todaysSeconds).padStart(2, '0')}</h3>
    }
  }

  return (
    <section className='info-container'>
      <div className='timer-container'style={{textAlign: 'center'}}>
        <p className='timer-title'>Your Shower Timer</p>
        <div className='timer-nums'style={{fontSize: '100px'}}>
          <span>{minutes}</span>:<span>{String(seconds).padStart(2, '0')}</span>
        </div>
        <div className='timer-btn-container'>
          <button className='timer-btn' id='start-btn' onClick={startShower}>Start</button>
          <button className='timer-btn' id='pause-btn' onClick={() => {pause(); setTotalShowerTime(todaysSeconds, todaysMinutes); setIsTimerRunning(false)}}>Pause</button>
          <button className='timer-btn' id='reset-btn' onClick={resetShower}>Reset</button>
        </div>
        <p>Please note: your daily record will not be recorded unless you submit below</p>
      </div>
      <div className='shower-data'>
        <div className='shower-data-text-box'>
          <h3 className='shower-data-text'>Today</h3>
          <h3 className='shower-data-text'>7 Day Average</h3>
          <h3 className='shower-data-text'>30 Day Average</h3>
        </div>
        <div className='shower-data-num-box'>
          {setTodayShowerTime()}
          <h3 className='shower-data-num'>{Math.floor(weeklyAverageShowerTime/60)}:{String(weeklyAverageShowerTime % 60).padStart(2, '0')}</h3>
          <h3 className='shower-data-num'>{Math.floor(thirtyDayAverageShowerTime/60)}:{String(thirtyDayAverageShowerTime % 60).padStart(2, '0')}</h3>
        </div>
      </div>
    </section>
  )
}

export default ShowerInfo;

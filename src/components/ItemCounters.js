import '../styles/ItemCounters.css';
import { gql, useMutation } from '@apollo/client';
import {SUBMIT_RECORD} from './Queries.js';
import dayjs from 'dayjs';

const ItemCounters = ({ bottleCount, setBottleCount, bagCount, setBagCount, strawCount, setStrawCount, totalMinutes, totalSeconds, allRecords, setAllRecords }) => {

let showerTime = parseInt(totalMinutes) * 60 + parseInt(totalSeconds)

  const handleIncrement = (currentCount, setCount) => {
    setCount(currentCount += 1)
  }

  const handleDecrement = (currentCount, setCount) => {
    if (currentCount >= 1) {
      setCount(currentCount -= 1)
    }
  }

  const [createDailyRecord, { error }] = useMutation(SUBMIT_RECORD)
  const submitRecord = () => {
    createDailyRecord({
      variables: {
        date: dayjs(Date()).format('YYYY-MM-DD'),
        userId: 186,
        bagCount: bagCount,
        bottleCount: bottleCount,
        strawCount: strawCount,
        showerTime: showerTime
      }
    })
    if (error) {
      console.log(error);
    }
  }

  const preventDuplicateSubmit = () => {
    let findDate = allRecords.find(record => record.date === dayjs(Date()).format('YYYY-MM-DD'))
    console.log(findDate)
    return findDate
  }

  return (
    <section className='item-counter-container'>
      <div className='item-counter'>
        <p className='item-name'>Plastic Bottles</p>
        <div className='item-increment'>
          <button className='item-decrement-btn' onClick={() => handleDecrement(bottleCount, setBottleCount)}>-</button>
          <p className='bottle-item-number'>{bottleCount}</p>
          <button className='item-increment-btn' onClick={() => handleIncrement(bottleCount, setBottleCount)}>+</button>
        </div>
      </div>
      <div className='item-counter'>
        <p className='item-name'>Plastic Straws</p>
        <div className='item-increment'>
        <button className='item-decrement-btn' onClick={() => handleDecrement(strawCount, setStrawCount)}>-</button>
          <p className='straw-item-number'>{strawCount}</p>
          <button className='item-increment-btn' onClick={() => handleIncrement(strawCount, setStrawCount)}>+</button>
        </div>
      </div>
      <div className='item-counter'>
        <p className='item-name'>Plastic Shopping Bags</p>
        <div className='item-increment'>
          <button className='item-decrement-btn' onClick={() => handleDecrement(bagCount, setBagCount)}>-</button>
          <p className='bag-item-number'>{bagCount}</p>
          <button className='item-increment-btn' onClick={() => handleIncrement(bagCount, setBagCount)}>+</button>
        </div>
      </div>
      <div className='item-counter'>
        {preventDuplicateSubmit() ? <p>You've already submitted your daily record. Come back tomorrow :)</p> : <button className='submit-btn' onClick={submitRecord}>Submit Daily Record!</button>}
      </div>
    </section>
  )
}

export default ItemCounters;

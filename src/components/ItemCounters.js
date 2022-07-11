import '../styles/ItemCounters.css'

const ItemCounters = ({ containerCount, setContainerCount, bagCount, setBagCount, strawCount, setStrawCount }) => {

  const handleIncrement = (currentCount, setCount) => {
    setCount(currentCount += 1)
  }

  const handleDecrement = (currentCount, setCount) => {
    if (currentCount >= 1) {
      setCount(currentCount -= 1)
    }
  }

  return (
    <section className='item-counter-container'>
      <div className='item-counter'>
        <p className='item-name'>Single Use Containers</p>
        <div className='item-increment'>
          <button className='item-increment-btn' onClick={() => handleDecrement(containerCount, setContainerCount)}>-</button>
          <p className='item-number'>{containerCount}</p>
          <button className='item-increment-btn' onClick={() => handleIncrement(containerCount, setContainerCount)}>+</button>
        </div>
      </div>
      <div className='item-counter'>
        <p className='item-name'>Plastic Straws</p>
        <div className='item-increment'>
        <button className='item-increment-btn' onClick={() => handleDecrement(strawCount, setStrawCount)}>-</button>
          <p className='item-number'>{strawCount}</p>
          <button className='item-increment-btn' onClick={() => handleIncrement(strawCount, setStrawCount)}>+</button>
        </div>
      </div>
      <div className='item-counter'>
        <p className='item-name'>Plastic Shopping Bags</p>
        <div className='item-increment'>
          <button className='item-increment-btn' onClick={() => handleDecrement(bagCount, setBagCount)}>-</button>
          <p className='item-number'>{bagCount}</p>
          <button className='item-increment-btn' onClick={() => handleIncrement(bagCount, setBagCount)}>+</button>
        </div>
      </div>
    </section>
  )
}

export default ItemCounters;

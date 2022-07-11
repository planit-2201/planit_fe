import '../styles/ItemCounters.css'

const ItemCounters = ({ containerCount, setContainerCount, bagCount, setBagCount, strawCount, setStrawCount }) => {
  
  const handleContainerIncrement = () => {
    setContainerCount(containerCount += 1) 
  }

  const handleContainerDecrement = () => {
    if (containerCount >= 1) {
      setContainerCount(containerCount -= 1)
    }
  }

  return (
    <section className='item-counter-container'>
      <div className='item-counter'>
        <p className='item-name'>Single Use Containers</p>
        <div className='item-increment'>
          <button className='item-increment-btn' onClick={handleContainerDecrement}>-</button>
          <p className='item-number'>{containerCount}</p>
          <button className='item-increment-btn' onClick={handleContainerIncrement}>+</button>
        </div>
      </div>
      <div className='item-counter'>
        <p className='item-name'>Plastic Straws</p>
        <div className='item-increment'>
          <button className='item-increment-btn'>-</button>
          <p className='item-number'>1</p>
          <button className='item-increment-btn'>+</button>
        </div>
      </div>
      <div className='item-counter'>
        <p className='item-name'>Plastic Shopping Bags</p>
        <div className='item-increment'>
          <button className='item-increment-btn'>-</button>
          <p className='item-number'>5</p>
          <button className='item-increment-btn'>+</button>
        </div>
      </div>
    </section>
  )
}

export default ItemCounters;

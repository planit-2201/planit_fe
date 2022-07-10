import '../styles/ItemCounters.css'

const ItemCounters = () => {
  return (
    <section className='item-counter-container'>
      <div className='item-counter'>
        <p className='item-name'>Single Use Containers</p>
        <div className='item-increment'>
          <button className='item-increment-btn'>+</button>
          <p className='item-number'>2</p>
        </div>
      </div>
      <div className='item-counter'>
        <p className='item-name'>Plastic Straws</p>
        <div className='item-increment'>
          <button className='item-increment-btn'>+</button>
          <p className='item-number'>1</p>
        </div>
      </div>
      <div className='item-counter'>
        <p className='item-name'>Plastic Shopping Bags</p>
        <div className='item-increment'>
          <button className='item-increment-btn'>+</button>
          <p className='item-number'>5</p>
        </div>
      </div>
    </section>
  )
}

export default ItemCounters;

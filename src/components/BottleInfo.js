import '../styles/BottleInfo.css'


const BottleInfo = () => {
  return (
    <section className='description-container'>
      <p className="data-title">Hi (insert user name from state), did you know the following facts about plastic water bottle usage?</p>
      <p className="data-paragraph"></p>
      <p className="data-title">In the past month, (check with BE here - would it be more accurate to say 'In the past 30 days,')</p>
      <p className="data-paragraph"></p>
      <p className="data-title">Tips to use less plastic bottles:</p>
      <ul className="data-paragraph">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  )
}

export default BottleInfo;

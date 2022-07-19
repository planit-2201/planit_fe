import '../styles/ShowerMinInfo.css';
import { useEffect } from 'react';

const ShowerMinInfo = ({ username, currentPage, setCurrentPage }) => {

  useEffect(() => {
    setCurrentPage('shower')
  })

  return (
    <section className='description-container'>
      <p className="data-title">Hi {username}, did you know the following facts about water usage?</p>
      <p className="data-paragraph"></p>
      <p className="data-title">In the past 30 days,</p>
      <p className="data-paragraph"></p>
      <p className="data-title">Tips to use less water:</p>
      <ul className="data-paragraph">
        <li>Try your best to limit your showers to 5 minutes in length.</li>
        <li>Consider investing in low-flow appliances, such as shower heads and toilets.</li>
        <li></li>
      </ul>
    </section>
  )
}

export default ShowerMinInfo;

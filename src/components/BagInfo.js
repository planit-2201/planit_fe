import '../styles/BagInfo.css'
import { useEffect } from 'react';

const BagInfo = ({ username, currentPage, setCurrentPage }) => {

  useEffect(() => {
    setCurrentPage('bottles')
  })

  return (
    <section className='description-container'>
      <p className="data-title">Hi {username}, did you know the following facts about plastic bag usage?</p>
      <p className="data-paragraph"></p>
      <p className="data-title">In the past 30 days,</p>
      <p className="data-paragraph"></p>
      <p className="data-title">Tips to use less plastic bags:</p>
      <ul className="data-paragraph">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  )
}

export default BagInfo;

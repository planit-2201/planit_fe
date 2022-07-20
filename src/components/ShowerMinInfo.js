import '../styles/ShowerMinInfo.css';
import { useEffect } from 'react';

const ShowerMinInfo = ({ username, currentPage, setCurrentPage, thirtyDayAvgGallons }) => {

  useEffect(() => {
    setCurrentPage('shower')
  })

  const findDifference = () => {
    return (17.2 - thirtyDayAvgGallons).toFixed(2);
  }

  const yearSavings = () => {
    return ((17.2 - thirtyDayAvgGallons) * 365).toFixed(2);
  }

  const findDescriptor = () => {
    if (findDifference() >= 0) {
      return 'fewer'
    } else {
      return 'more'
    }
  }

  const findFinalSentence = () => {
    if (findDifference() >= 0) {
      return `At this rate, you'll save ${yearSavings()} gallons water in a year!`
    } else {
      return
    }
  }

  return (
    <section className='description-container'>
      <p className="data-title">Hi {username}, did you know the following facts about water usage?</p>
      <p className="data-paragraph">Each American uses an average of <a className="source-link" href="https://www.usgs.gov/mission-areas/water-resources/science/water-use-united-states">82 gallons of water a day at home</a>. Replacing showerheads with WaterSense labeled models can reduce the average family's water and electricity costs by $70 and can save the average family more than 2,700 gallons of water per year, equal to the amount of water needed to wash 88 loads of laundry.</p>
      <p className="data-title">In the past 30 days,</p>
      <p className="data-paragraph">you used an average of {thirtyDayAvgGallons} gallon(s) of water per day when showering,  that's  {Math.abs(findDifference())} gallons {findDescriptor()} gallons than the national average. {findFinalSentence()}</p>
      <br />
      <p className="data-paragraph">The average shower water use among 526 users on PlanIt for the past 30 days is 10.8 per day. Together with the 525 other users, our app will save over 1.2 million gallons of water in a year!
      </p>
      <p className="data-title">Tips to save water when showering:</p>
      <ul className="data-paragraph">
        <li>Get all essentials ready beforehand.</li>
        <li>Shuts off shower head when washing hair/shaving.</li>
        <li>Play a 4-5 mins song or set a timer.</li>
        <li>Choose a showerhead with lower gallons per minute flow rate (1.8/2.0/2.5).</li>
      </ul>
    </section>
  )
}

export default ShowerMinInfo;

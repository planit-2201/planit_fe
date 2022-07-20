import '../styles/BottleInfo.css'
import { useEffect } from 'react';

const BottleInfo = ({ username, currentPage, setCurrentPage, thirtyDayAvgBottles }) => {

  useEffect(() => {
    setCurrentPage('bottles')
  })

  const findDifference = () => {
    return (8.25 - thirtyDayAvgBottles).toFixed(2);
  }

  const yearSavings = () => {
    return ((8.25 - thirtyDayAvgBottles) * 365).toFixed(2);
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
      return `At this rate, you'll save ${yearSavings()} bottles in a year!`
    } else {
      return
    }
  }

  return (
    <section className='description-container'>
      <p className="data-title">Hi {username}, did you know the following facts about plastic water bottle usage?</p>
      <p className="data-paragraph">In 2018 alone, the consumption of PET/HDPE bottles was <a className="source-link" href="https://www.plasticfreejuly.org/get-involved/what-you-can-do/plastic-water-bottles/">estimated to be over 13.8 million tons</a>. Assuming an average weight of 14.03 grams for a 330 ml bottle, Americans consumed over 984 billion plastic bottles with an annual average of 3010 bottles per person, and average of 8.25 bottles per person per day.</p>
      <p className="data-title">In the past 30 days,</p>
      <p className="data-paragraph">you used an average of {thirtyDayAvgBottles} plastic bottle(s) a day, that's {Math.abs(findDifference())} {findDescriptor()} bottles than the national average. {findFinalSentence()}</p>
      <br />
      <p className="data-paragraph">The average plastic bottle use among 526 users on PlanIt for the past 30 days is 1.5 per day. Together with the other 525 users, our app will save almost 1.3 millions bottles in a year!
      Keep up the good work! Your actions are making a real impact!</p>
      <p className="data-title">Tips to use fewer plastic bottles:</p>
      <ul className="data-paragraph">
        <li>Bring your own reusable water bottle with you wherever you go.</li>
        <li>If you do forget to bring your water bottle along with you, don’t panic! You can find a fountain, ask a cafe for a glass of water, or purchase a glass bottle of water and reuse it.</li>
        <li>Go further with your impact by encouraging and supporting businesses to provide refillable water stations.</li>
      </ul>
    </section>
  )
}

export default BottleInfo;

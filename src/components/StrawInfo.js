import '../styles/StrawInfo.css'
import { useEffect } from 'react';

const StrawInfo = ({ username, currentPage, setCurrentPage, thirtyDayAvgStraws }) => {

  useEffect(() => {
    setCurrentPage('straws')
  })

  const findDifference = () => {
    return (1.6 - thirtyDayAvgStraws).toFixed(2);
  }

  const yearSavings = () => {
    return ((1.6 - thirtyDayAvgStraws) * 365).toFixed(2);
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
      return `At this rate, you'll save ${yearSavings()} straws in a year!`
    } else {
      return
    }
  }

  return (
    <section className='description-container'>
      <p className="data-title">Hi {username}, did you know the following facts about straw usage?</p>
      <p className="data-paragraph"><a className="source-link" href={'https://www.nps.gov/articles/straw-free.htm#:~:text=Milo%20reported%20through%20his%20initial,46%2C400%20school%20buses%20every%20year'
}>Milo reported</a> through his initial research and data he collected from straw manufacturers that Americans use 500 million drinking straws every day. To understand just how many straws 500 million really is, Milo indicated this would fill over 125 school buses with straws every day. That's 46,400 school buses every year!</p>
      <p className="data-title">In the past 30 days,</p>
      <p className="data-paragraph">you used an average of {thirtyDayAvgStraws} straw(s) a day, that's {Math.abs(findDifference())} {findDescriptor()} straws than the national average! {findFinalSentence()}</p>
      <br />
      <p className="data-paragraph">The average straw use among 526 users on PlanIt for the past 30 days is 0.3 per day. Together with the other 525 users, our app will save 325,762.5 in a year! Keep up the good work! Your actions are making a real impact.</p>
      <p className="data-title">Tips to use fewer straws:</p>
      <ul className="data-paragraph">
        <li>Bring your own reusable straws with you when going out.</li>
        <li>Take initiative and tell the server that you don't need straws when ordering a drink.</li>
        <li>Frequent establishments that provide paper straws or make an effort to recycle their single-use products.</li>
      </ul>
    </section>
  )
}

export default StrawInfo;

import { useEffect } from 'react';

const BagInfo = ({ username, setCurrentPage, thirtyDayAvgBags }) => {

  useEffect(() => {
    setCurrentPage('bottles')
  })

  const findDifference = () => {
    return (0.75 - thirtyDayAvgBags).toFixed(2);
  }

  const yearSavings = () => {
    return ((0.75 - thirtyDayAvgBags) * 365).toFixed(2);
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
      return `At this rate, you'll save ${yearSavings()} plastic shopping in a year!`
    } else {
      return
    }
  }

  return (
    <section className='description-container'>
      <p className="data-title">Hi {username}, did you know the following facts about plastic bag usage?</p>
      <p className="data-paragraph">In 2018 the average person in the US <a className="source-link" href="https://www.almostzerowaste.com/reduce-plastic-bags/">used 306 plastic bags or 2,141 grams of solid plastic waste</a>. That adds up to 100 billion plastic bags (700 thousand tons) per year!</p>
      <p className="data-title">In the past 30 days,</p>
      <p className="data-paragraph">you used an average of {thirtyDayAvgBags} single-use plastic bag(s) a day, that's {Math.abs(findDifference())} {findDescriptor()} bags than the national average. {findFinalSentence()}</p>
      <br />
      <p className="data-paragraph">The average plastic bag use among 526 users on PlanIt for the past 30 days is 0.35 per day. Together with the other 525 users, our app will save over 93 thousand  bags in a year! Keep up the good work! Your actions are making a real impact!</p>
      <p className="data-title">Tips to use fewer plastic bags:</p>
      <ul className="data-paragraph">
        <li>Plan ahead and bring reusable bags when shopping.</li>
        <li>Keep reusable shopping bags in your car/on your person.</li>
        <li>Reuse old plastic bags.</li>
        <li>Frequent stores that offer alternatives to single-use plastic bags, e.g. paper bags, cardboard boxes.</li>
      </ul>
    </section>
  )
}

export default BagInfo;

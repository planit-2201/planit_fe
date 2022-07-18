import '../styles/StrawInfo.css'


const StrawInfo = () => {
  return (
    <section className='description-container'>
      <p className="data-title">Hi (insert user name from state), did you know the following facts about straw usage?</p>
      <p className="data-paragraph">Milo(get link to source from Kim and include it here!) reported through his initial research and data he collected from straw manufacturers that Americans use 500 million drinking straws every day. To understand just how many straws 500 million really is, Milo indicated this would fill over 125 school buses with straws every day. That's 46,400 school buses every year!</p>
      <p className="data-title">In the past month, (check with BE here - would it be more accurate to say 'In the past 30 days,')</p>
      <p className="data-paragraph">you used an average of (pull this from BE, store in state, interpolate) straws a day, that's 1.5 fewer straws than the national average (2 straws per person per day)! At this rate, you'll save (math based on state!) straws in a year!
      The average straw use among 526 users on PlanIt for the past 30 days is 0.3 per day. Together with the other 525 users, our app will save 325,762.5 in a year! (Check with others - do we want to hardcode this info for effect? Do we not want to include fake data like this at all?)
      Keep up the good work! Your actions are making a real impact.</p>
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

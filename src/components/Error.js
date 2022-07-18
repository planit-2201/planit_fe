import { Link } from 'react-router-dom';
import '../styles/Error.css';

const Error = () => {
  return (
    <div className='fof-box'>
      <p className='fof-message'>Oh no! This page doesn't exist!</p>
      <Link to='/' className='redirect'><strong className='redirect'>Click here to go back to the main page.</strong></Link>
    </div>
  );
};

export default Error;

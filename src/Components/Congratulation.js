import React from 'react';
import hurray from '../Components/hurray.png';
import { useNavigate} from 'react-router-dom';


const Congratulation = () => {
 
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div className='Congrats'>
       <div className='message'>
        <span className='message-display'>CONGRATULATIONS</span>
        <div className='icons'><img src={hurray} alt='hurray' className='icon' />
        <img src={hurray} alt='hurray' className='icon' /></div>
        <button className='back-btn' onClick={navigateToHome}>Go back</button>
       </div>
       <div className='bottom'>
        <span className='image-text'>All previous images on :-</span>
        <div className='images'>
          <div className='image-display'></div>
          <div className='image-display'></div>
          <div className='image-display'></div>
          <div className='image-display'></div>
        </div>
       </div>
    </div>
  )
}

export default Congratulation

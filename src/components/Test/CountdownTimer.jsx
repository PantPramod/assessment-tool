import React from 'react';
import Countdown from 'react-countdown';
import { SubmitHandler } from './CompleteStatus';




const CountdownTimer = () => {
    const renderer = ({ hours, minutes, seconds, completed }) => {
    
    if (completed) {
      return <SubmitHandler/>;
    } else {
      return <span>{hours}:{minutes}:{seconds}</span>;
    }
  };

  return (
  
       <Countdown
        date={Date.now() + 1200000}
        renderer={renderer}
  />
 
   
    
  )
}

export default React.memo(CountdownTimer)
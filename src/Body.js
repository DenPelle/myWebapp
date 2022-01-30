import React from 'react';
import "./Body.css"
import useWindowSize from './useWindowSize.js';
import BodyMoreThan1200 from './components/body+1200/body+1200.js';
import BodyLessThan1200 from './components/body_1200/body_1200.js';

function Body() {
  
  const size = useWindowSize();

  return (
    <div className='body'>
      {size.width > 1200 && <BodyMoreThan1200/>}
      {size.width < 1200 && <BodyLessThan1200/>}
    </div>
  );
}

export default Body;

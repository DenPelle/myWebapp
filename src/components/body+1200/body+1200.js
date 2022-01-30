import React from 'react';
import Highnav from '../highnav.js';

function BodyMoreThan1200() {
  return (
  <div className='body-Body justify-center'>
    <div className="page-containerMoreThan1200 flex ">
      <Highnav/>
      <div className="cardsMoreThan1200 flex">
        <div className="navigator2 ">
          <div className="side-little light-light_blue upper"></div>
          <div className="side-big dark-light_blue lower"></div>
        </div>
        {/* <nav className='navigator3 flex'>
          <div className='side-little dark-purple upper'></div>
          <div className="side-big light-purple lower "></div>
        </nav> */}
      </div>
    </div>
  </div>);
}

export default BodyMoreThan1200;

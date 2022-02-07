import React from 'react';
import "./AccessPage.css";
import {Link, Routes, Route} from 'react-router-dom';
import AccesspageMoreThan1200 from './accesspage+1200/Accesspage+1200.js';
import AccesspageLessThan1200 from './accesspage_1200/Accesspage_1200.js';
import useWindowSize from './useWindowSize.js';


function AccessPage({setToken}) {
    const size = useWindowSize();
      
  return (
  <div className="AccessPage">
      {
        size.width < 1200 &&
          <AccesspageLessThan1200/>

      }
      
      {
        size.width > 1200 &&
        <AccesspageMoreThan1200/>
      }

  </div>
    );
}


export default AccessPage;

import React from 'react';
import "./3dImage.css";

import Body from './Body.js';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';

function InnerWindow() {
  return( 
  <div className='threeDImage transform cube-wrap '>
    <div className="container_3d ">
        <div className="first_col col ">
            <div className="first_row block ">
                
            </div>
            <div className="second_row block ">
                
            </div>
        </div>
        <div className="second_col col">
            <div className="first_row block ">
                
            </div>
            <div className="second_row block ">
                <div className="avvertenze">

                </div>
                <div className='second_row_content'>

                </div>
                <div className="contacts">
                  <a href="https://github.com/DenPelle?tab=repositories">
                  <GitHubIcon 
                  style={{color: '#5b3a81', fontWeight:"bold", fontSize:24, fontStyle:"normal"}}/>
                  </a>

                  <SendRoundedIcon 
                  style={{color: '#5b3a81', fontWeight:"bold", fontSize:24, fontStyle:"normal"}}/>
                  
                  <AlternateEmailRoundedIcon 
                  style={{color: '#5b3a81', fontWeight:"bold", fontSize:24, fontStyle:"normal"}}/>
                </div>
            </div>
        </div>
    </div>
  </div>
  );
}

export default InnerWindow;
// -webkit-transition: all 0.5s cubic-bezier(0.81, 0.21, 0.65, 0.79);
//     transition: all 0.5s cubic-bezier(0.81, 0.21, 0.65, 0.79);
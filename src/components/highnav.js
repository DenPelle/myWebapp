import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
function Highnav() {
  return(
        <nav className="navigator-container flex valign-content">
                <nav className="navigator flex">
                    <div className='side-little gray left flex justify-left'> {/* flex justify-center */}
                        <CodeIcon style={{fontSize:30}} className='code__icon'/>
                        <p className='text'>Hello World I'm Deniel</p>
                    </div>
                    <div className="side-little black right flex">
                        <GitHubIcon style={{fontSize:28}} className='git__icon'/>
                        <p className='text'>Hello World I'm Deniel</p>
                    </div>
                </nav>
            </nav>);
}

export default Highnav;

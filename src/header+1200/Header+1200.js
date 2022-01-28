import React from 'react';

import PersonIcon from '@mui/icons-material/Person';
import Button from '@material-ui/core/Button';
import CachedIcon from '@mui/icons-material/Cached';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import logo from 'C:/Users/39391/Desktop/Organizer/VideoGame C++/myWebapp/myWebapp/src/img.png'



function HeaderMoreThan1200() {
    function refreshPage() {window.location.reload(false);}
    
  return(
  <div className={"headerMoreThan1200"}>
        <div className='innermenu innermenu-sx'>
            <Button 
                style={{backgroundColor: '#30ac87', color: '#CFFBFC'}}
                variant='contained'
                className="btn-menu__icon" >
                    <ArrowForwardIosIcon style={{fontSize:28}} className='menu__arrow_left-icon'/>
            </Button>

            <Button
                style={{backgroundColor: '#5c338b', color: '#CFFBFC'}}
                variant='contained'
                color='primary'
                className="btn-menu__icon" >
                    <PersonIcon style={{fontSize:30}} className='menu__person-icon'/>
            </Button>

            <Button 
                variant='outlined' 
                color='primary' 
                className="btn-menu__icon" >
                    <ArrowDropDownIcon style={{fontSize:20}} className='menu__arrow_down-icon'/>
            </Button>
        </div>
        <img
            className='logo logo-MoreThan1200'
            src={logo} />
        <div className='innermenu-dx innermenu'>
            <Button
                style={{
                    border:5,
                    color: '#CFFBFC'
                }}
                variant='outlined'  
                className='btn-menu__icon'
                onClick={refreshPage}>
                    <CachedIcon style={{fontSize:30}} className='reload__icon'/>
            </Button>
        </div>
  </div>);
}

export default HeaderMoreThan1200;

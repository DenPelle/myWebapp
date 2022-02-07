import React from 'react';
import {Link, Routes, Route} from 'react-router-dom';

import PersonIcon from '@mui/icons-material/Person';
import Button from '@material-ui/core/Button';
import CachedIcon from '@mui/icons-material/Cached';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import logo from 'C:/Users/39391/Desktop/Organizer/VideoGame C++/myWebapp/myWebapp/src/img.png'



function HeaderMoreThan1200() {
    function refreshPage() {window.location.reload(false);}
    var isLoggedIn = false;

  return(
  <div className={"headerMoreThan1200"}>
        <div className='innermenu innermenu-sx'>
            <Button 
                style={{backgroundColor: '#30ac87', color: '#CFFBFC'}}
                variant='contained'
                className="btn-menu__icon" >
                    <ArrowForwardIosIcon style={{fontSize:28}} className='menu__arrow_left-icon'/>
            </Button>
            {!isLoggedIn && 
            <Link to="/login">
                <Button
                style={{
                    border:5,
                    color: '#CFFBFC'
                }}
                variant='outlined'  
                className='btn-menu__icon'>
                        <PersonIcon style={{fontSize:30}} className='menu__person-icon'/>
                </Button>
            </Link>
            }
            {isLoggedIn &&
            <Link to="/profile">
                <Button
                style={{
                    border:5,
                    color: '#CFFBFC'
                }}
                variant='outlined'  
                className='btn-menu__icon'>
                        <PersonIcon style={{fontSize:30}} className='menu__person-icon'/>
                </Button>
            </Link>
            }

            {/* <Button 
                variant='outlined' 
                color='primary' 
                className="btn-menu__icon" >
                    <ArrowDropDownIcon style={{fontSize:20}} className='menu__arrow_down-icon'/>
            </Button> */}
        </div>
        <Link to="/">
        <img
            className='logo logo-MoreThan1200'
            src={logo} />
        </Link>
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

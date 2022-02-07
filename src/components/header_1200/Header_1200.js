import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import Button from '@material-ui/core/Button';
import CachedIcon from '@mui/icons-material/Cached';
import logo from 'C:/Users/39391/Desktop/Organizer/VideoGame C++/myWebapp/myWebapp/src/img.png'

function HeaderLessThan1200() {
    function refreshPage() {window.location.reload(false);}
    var isLoggedIn = false;

  return (<div className='headerLessThan1200'>
        <Button 
            style={{
                backgroundColor: '#5c338b',
                color: '#CFFBFC'
            }}
            variant='contained' 
            color='primary'
            className='btn-menu__icon'>
                <MenuIcon style={{fontSize:30}} className='menu__icon' aria-label='Menu'/>
        </Button>
        <Link to="/">
        <img src={logo}
            className='logo'>
        </img>    
        </Link>


        <Button 
            style={{
                    backgroundColor: '#5c338b',
                    border:0,
                    color: '#CFFBFC'
                }}
            variant='outlined' 
            className='btn-menu__icon'
            onClick={refreshPage}>
                <CachedIcon style={{fontSize:30}} className='reload__icon'/>
        </Button>

  </div>);
}

export default HeaderLessThan1200;

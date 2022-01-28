import React from 'react';
import {useState, useEffect} from 'react';
import './Header.css';
import HeaderLessThan1200 from './header_1200/Header_1200.js';
import HeaderMoreThan1200 from './header+1200/Header+1200.js';
import IconButton from '@mui/material/IconButton';
import CachedIcon from '@mui/icons-material/Cached';
import useWindowSize from './useWindowSize.js';
import { makeStyles } from "@material-ui/core/styles";


function Header() {

  const size = useWindowSize();
  
  return (
  <div className='header'>
    {
      size.width < 1200 &&
       <HeaderLessThan1200/>
    }

    {size.width > 1200 && 
      <HeaderMoreThan1200/>
    }
  </div>
  );
}

export default Header;


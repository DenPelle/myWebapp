import React, {useEffect, useState, Fragment} from 'react';

import Highnav from '../highnav.js';
import axios from "../../axios.js"
import useWindowSize from '../useWindowSize.js';

// icons
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShareIcon from '@mui/icons-material/Share';

function BodyMoreThan1200() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchData() {
        const req = await axios.get('/a');
        
        setCards(req.data);
    }
    
    fetchData();
  }, []);

  var bookmark_ico = BookmarkBorderIcon;
  const saveCard = () =>{
    bookmark_ico = BookmarkIcon;

  }

  return (
  <div className='body-Body justify-center'>
    <div className="page-containerMoreThan1200 flex ">
      <Highnav/>
      <div className="cardsMoreThan1200 flex">
        {
          cards.map((card,index) =>(
            <div className="navigator2" key={index}>
              <div className={`side-little upper ${card.color1}`}>
                <h1 className='title'>{card.title}</h1>
                <h2 className="date">{card.date}</h2>
              </div>
              <div className={`side-big flex coldirection lower ${card.color2}`}>
                <p className="message">{card.message}</p>
                <div className='icons_side-big flex'>
                  <ShareIcon className='share__icon'/>
                  <BookmarkBorderIcon className='bookmark__icon'/>
                </div>
              </div>
            </div>
          ))
        }
        {/* <nav className='navigator3 flex'>
          <div className='side-little dark-purple upper'></div>
          <div className="side-big light-purple lower "></div>
        </nav> */}
      </div>
    </div>
  </div>);
}

export default BodyMoreThan1200;

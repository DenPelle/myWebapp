import React, {Fragment, useState, useEffect} from 'react';

import Highnav from '../highnav.js';
import axios from '../../axios.js';
import useWindowSize from '../useWindowSize.js';

//  icons
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShareIcon from '@mui/icons-material/Share';

function BodyLessThan1200() {
  const size = useWindowSize();
  const [cards, setCards] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
      async function fetchData() {
          const req = await axios.get('/a');
          
          setCards(req.data);
      }
      
      fetchData();
  }, []);

  useEffect(() => {
    async function fetchData2() {
      const req = await axios.get("/user");

      setUsers(req.data);
    }

    fetchData2();
  }, []);

  // const isSaved = (index) =>{
  //   if(index in users.)
  // }
  var isSaved = false

  return (
  <div className="body-Body justify-center">
    <div className="page-containerLessThan1200 flex ">
      {
        size.width > 700 && 
        <div className='highnav-section flex justify-center'>
          <div className='highnav-container'>
            <Highnav/>
          </div>
        </div>
      }
      <div className="cards flex justify-center">
        {
          cards.map((card, index) =>(
            <div className="navigator2" key={index}>
              <div className={`side-little upper flex coldirection ${card.color1}`}>
                <h1 className='title'>{card.title}</h1>
                <h2 className="date">{card.date}</h2>
              </div>
              <div className={`side-big flex coldirection lower ${card.color2}`}>
                <p className="message">{card.message}</p>
                <div className='icons_side-big flex'>
                  <ShareIcon className='share__icon'/>
                  { isSaved === false &&
                    <BookmarkBorderIcon className='bookmark__icon'/>
                  }
                </div>
              </div>
            </div>
            ))}
      </div>
    </div>
  </div>);
}

export default BodyLessThan1200;


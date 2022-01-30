import React, {Fragment, useState, useEffect} from 'react';
import Highnav from '../highnav.js';
import axios from '../../axios.js';
import useWindowSize from '../../useWindowSize.js';


function BodyLessThan1200() {
  const size = useWindowSize();
  const [cards, setCards] = useState([]);
    
  useEffect(() => {
      async function fetchData() {
          const req = await axios.get('/a');
          
          setCards(req.data);
      }
      
      fetchData();
  }, []);
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
              <div className={`side-big lower ${card.color2}`}>
                <p className="message">{card.message}</p>
              </div>
            </div>
            ))}
      </div>
        {/* <nav className='navigator3 flex'>
          <div className='side-little dark-purple upper'></div>
          <div className="side-big light-purple lower "></div>
        </nav> */}
    </div>
  </div>);
}

export default BodyLessThan1200;


import React, { useState } from 'react';
import './Gallery.css'; // Import the CSS file
import CloseIcon from '@mui/icons-material/Close';

import Img1 from './img/img1.jpg';
import Img2 from './img/img2.jpg';
import Img3 from './img/img3.jpg';
import Img4 from './img/img4.jpg';
import Img5 from './img/img5.jpg';
import Img6 from './img/img6.jpg';
import Img7 from './img/img7.jpg';
import Img8 from './img/img8.jpg';
import Img9 from './img/img9.jpg';
import Img10 from './img/img10.jpg';

const imageMap = {
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
};

const Gallery = () => {
  const data = [
    {
      id: 1,
      imgSrc: imageMap.Img1,
    },
    {
      id: 2,
      imgSrc: imageMap.Img2,
    },
    {
      id: 3,
      imgSrc: imageMap.Img3,
    },
    {
      id: 4,
      imgSrc: imageMap.Img4,
    },
    {
      id: 5,
      imgSrc: imageMap.Img5,
    },
    {
      id: 6,
      imgSrc: imageMap.Img6,
    },
    {
      id: 7,
      imgSrc: imageMap.Img7,
    },
    {
      id: 8,
      imgSrc: imageMap.Img8,
    },
    {
      id: 9,
      imgSrc: imageMap.Img9,
    },
    {
      id: 10,
      imgSrc: imageMap.Img10,
    },
  ];
  const [model, setModel]= useState(false);
  const[tempimgSrc, setTempImgSrc] = useState('');
  const getImg=(imgSrc)=>{
    setTempImgSrc(imgSrc);
    setModel(true);
  }
  return (
    <>
    <div className={model? "model open":"model"}>
      <img src={tempimgSrc} alt=''/>
      <CloseIcon onClick={()=>setModel(false)}/>
    </div>
    <div className="gallery">
      {data.map((item, index) => {
        return (
          <div className="pics" key={index} onClick={()=> getImg(item.imgSrc)}>
            <img src={item.imgSrc} alt='' style={{width: '100%'}} />
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Gallery;
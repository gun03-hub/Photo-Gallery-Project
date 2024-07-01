import React, { useState } from 'react';
import './Gallery.css'; // Import the CSS file
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

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
  const [images, setImages] = useState([
    { id: 1, imgSrc: imageMap.Img1 },
    { id: 2, imgSrc: imageMap.Img2 },
    { id: 3, imgSrc: imageMap.Img3 },
    { id: 4, imgSrc: imageMap.Img4 },
    { id: 5, imgSrc: imageMap.Img5 },
    { id: 6, imgSrc: imageMap.Img6 },
    { id: 7, imgSrc: imageMap.Img7 },
    { id: 8, imgSrc: imageMap.Img8 },
    { id: 9, imgSrc: imageMap.Img9 },
    { id: 10, imgSrc: imageMap.Img10 },
  ]);
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editImageId, setEditImageId] = useState(null);
  const [newImgSrc, setNewImgSrc] = useState('');
  const [addMode, setAddMode] = useState(false);

  const getImg = (imgSrc) => {
    console.log("Image clicked:", imgSrc);
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  const deleteImage = (id) => {
    console.log("Deleting image with id:", id);
    setImages(images.filter((image) => image.id !== id));
  };

  const editImage = (id, imgSrc) => {
    console.log("Editing image with id:", id);
    setEditMode(true);
    setEditImageId(id);
    setNewImgSrc(imgSrc);
    setModel(true);
  };

  const saveEditImage = () => {
    console.log("Saving edited image with id:", editImageId, "new src:", newImgSrc);
    setImages(
      images.map((image) =>
        image.id === editImageId ? { ...image, imgSrc: newImgSrc } : image
      )
    );
    setEditMode(false);
    setModel(false);
  };

  const addImage = () => {
    if (!newImgSrc.trim()) {
      alert('Please enter a valid image URL.');
      return;
    }
    const newId = images.length ? images[images.length - 1].id + 1 : 1;
    console.log("Adding new image with id:", newId, "src:", newImgSrc);
    setImages([...images, { id: newId, imgSrc: newImgSrc }]);
    setAddMode(false);
    setModel(false);
  };

  return (
    <>
      <div className={model ? 'model open' : 'model'}>
        {editMode || addMode ? (
          <>
            <input
              type="text"
              value={newImgSrc}
              onChange={(e) => setNewImgSrc(e.target.value)}
              placeholder="Enter image URL"
            />
            <button onClick={editMode ? saveEditImage : addImage}>
              {editMode ? 'Save' : 'Add'}
            </button>
          </>
        ) : (
          <img src={tempImgSrc} alt="" />
        )}
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {images.map((item, index) => (
          <div className="pics" key={index}>
            <img
              src={item.imgSrc}
              alt=""
              style={{ width: '100%' }}
              onClick={() => getImg(item.imgSrc)}
            />
            <div className="icon-container">
              <EditIcon
                onClick={() => editImage(item.id, item.imgSrc)}
                style={{ cursor: 'pointer' }}
              />
              <DeleteIcon
                onClick={() => deleteImage(item.id)}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
        ))}
        <div
          className="add-image"
          onClick={() => {
            setAddMode(true);
            setModel(true);
            setNewImgSrc('');
          }}
        >
          <AddIcon style={{ fontSize: 40 }} />
        </div>
      </div>
    </>
  );
};

export default Gallery;

import React from 'react';
import './GalleryItem.css'
import Likes from '../Likes/Likes.jsx'
import {useState} from 'react';


function GalleryItem({picture, registerLikes}){
    console.log('item we are destructuring,', picture);

    const[swap, setSwap] = useState(true);
    function onPictureClick(){
        setSwap(!swap);
    };

    function onDescriptionClick(){
        setSwap(!swap);
    }

    return(
      <>
    
        <div className= "pictureBox" key={picture.id}>
                    {swap ?
                    <img onClick= {onPictureClick} className= "pics" src= {picture.path} width={250} height= {250}/> :
                      <h3 onClick= {onDescriptionClick} className= "descriptionBox"> {picture.description}</h3>
                    }
                    <Likes key = {picture.id} 
                           likes = {picture.likes}  
                           registerLikes= {registerLikes}/> 
                    
                    
        </div>
      </>
    )
}
export default GalleryItem;
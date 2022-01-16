import React from 'react';
import './GalleryItem.css'
import Likes from '../Likes/Likes.jsx'
import {useState} from 'react';


function GalleryItem({picture, registerLikes}){
    console.log('item we are destructuring,', picture);
    //defined a random variable to a true/false value so that on the click of the div, 
    //the status of swap will switch to true and then back to false on click
    const[swap, setSwap] = useState(true);
    //   On click functions to switch the status of the picture to false 
    //   this will render the flip of the photo to description based on 
    //   the ternary statement on line 26
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
                    <img onClick= {onPictureClick} className= "pics" src= {picture.path} width={350} height= {350}/> :
                      <h3 onClick= {onDescriptionClick} className= "descriptionBox"> {picture.description}</h3>
                    }
                    <h2> {picture.title}</h2>
                    <Likes key = {picture.id} 
                           likes = {picture.likes}  
                           registerLikes= {registerLikes}/> 
                    
                    
        </div>
      </>
    )
}
export default GalleryItem;
//child of GalleryList
import React from 'react';
import './GalleryItem.css'
import Likes from '../Likes/Likes.jsx'
import {useState} from 'react';

//completed           SWITCH BETWEEN PICTURE AND DESCRIPTION:


function GalleryItem({picture, registerLikes}){
          //console.log('item we are destructuring,', picture);         
        const[swap, setSwap] = useState(true);
      //defined a random variable (swap) to a true/false value so onClick of the div, 
      //the status of swap will switch between true and false 
      //when swap is true picture shows
        function onPictureClick(){
            setSwap(!swap);
        };

        function onDescriptionClick(){
            setSwap(!swap);
        }

    return(
      <>
      {/* Where we mapped each item of our object in GalleryList to a unique div container acc. to ID */}
        <div className= "pictureBox" key={picture.id}>
                   {/* Ternary statement where we define if the variable  "swap" is true, display picture.path */}
                   {/*  if swap is false, display picture.description  */}
                    {swap ?
                    <img onClick= {onPictureClick} className= "pics" src= {picture.path} width={350} height= {350}/> :
                      <h3 onClick= {onDescriptionClick} className= "descriptionBox"> {picture.description}</h3>
                    }
                    <h2> {picture.title}</h2>
                    {/* Functions and attributes of our object "picture" that we are passing through to Likes file */}
                    <Likes key = {picture.id} 
                           likes = {picture.likes}  
                           registerLikes= {registerLikes}/> 
        </div>
      </>
    )
}
export default GalleryItem;
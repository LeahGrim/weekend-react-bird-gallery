import {useState} from 'react';
//import axios from 'axios';

function Likes({likes, getGallery}){
    const [totalLikes, setLikes]= useState(likes)
    function addLike(){
        console.log
        setLikes(totalLikes + 1);
    }

    function removeLike(){
        setLikes(totalLikes -1);
    }

    return(
        <>
        <h2> Likes: {totalLikes}</h2>

        <button className= "Buttons" onClick= {addLike}>  Like </button>
        <button className= "Buttons" onClick= {removeLike}>  Dislike  </button>

        </>
    )
}
export default Likes;
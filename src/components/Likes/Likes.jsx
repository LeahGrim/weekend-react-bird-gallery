import {useState} from 'react';
import axios from 'axios';

function Likes({likes, getGallery}){
    const [totalLikes, setLikes]= useState(likes)
    
    const registerLikes = () => {
        axios({
          method: 'PUT',
          url: `/gallery/like/:id`
        }).then(response => {
          console.log('PUT success on likes.jsx, likes updated', response);
          addLike();
          getGallery();
        }).catch((error) => {
          console.log('something funky happened on the PUT request in the likes.jsx', error);
        })
        
      }

    
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

        <button className= "Buttons" onClick= {registerLikes}>  Like </button>
        <button className= "Buttons" onClick= {removeLike}>  Dislike  </button>

        </>
    )
}
export default Likes;
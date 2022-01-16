//child of GalleryItem.jsx


//import axios from 'axios';

function Likes({registerLikes, picture, registerDislikes}){

    return (
        <>
        <h2> Likes: {picture.likes}</h2>

        <button className= "Buttons" onClick= {() => registerLikes(picture)}>  Like </button>
        {/* only changing on the DOM ... not on the server data */}
        <button className= "Buttons" onClick= {() => registerDislikes(picture)}>  Dislike  </button>

        </>
    )
    }

export default Likes;
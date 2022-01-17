//child of GalleryItem.jsx
import './Likes.css'

function Likes({registerLikes, picture, registerDislikes}){

    return (
        <>
       <div className= "likesTitle"><h2>  Likes: {picture.likes} </h2></div>

        <button className= "Buttons" onClick= {() => registerLikes(picture)}>  Like </button>
        {/* only changing on the DOM ... not on the server data */}
        <button className= "Buttons" onClick= {() => registerDislikes(picture)}>  Dislike  </button>

        </>
    )
    }

export default Likes;
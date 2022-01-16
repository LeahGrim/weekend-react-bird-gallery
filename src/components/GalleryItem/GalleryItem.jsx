import './GalleryItem.css'
import Likes from '../Likes/Likes.jsx'
//import PictureDescription from '../PictureDescription/PictureDescription.jsx';

function GalleryItem({picture, getGallery, registerLikes}){
    console.log('item we are destructuring,', picture);


    return(
      <>
    
        <div className= "pictureBox" key={picture.id}>
                    <img className= "pics" src= {picture.path} width={250} height= {250}
                    onClick= {picture.Description}/>
                      {picture.description}
                    <Likes likes = {picture.likes} key = {picture.id} getGallery={getGallery} registerLikes= {registerLikes}/> 
                    
                    
        </div>
      </>
    )
}
export default GalleryItem;
//child of App.jsx
import GalleryItem from '../GalleryItem/GalleryItem.jsx'
import '../GalleryItem/GalleryItem.css'
import '../GalleryList/GalleryList.css'

function GalleryList({galleryList, registerLikes, registerDislikes}) {

    return(
              <div className= "containerForPics">
     {/* This is where we iterate through the object "galleryList" which is derived from App.jsx via .map */}
     {/* each item of galleryList is referred to as "picture" from here on out  */}
            {galleryList.map(picture => (
                                         // Gallery List is sending GalleryItem the following attributes: 
                                                     // (1) each item's ID, (2) the item's bulk info or data
                                                     //         (3) the function registerLikes
            <GalleryItem key = {picture.id}
                         picture = {picture}   
                         registerLikes= {registerLikes} 
                         registerDislikes= {registerDislikes}/>
             ))}
            
        </div>
       

    )
}
export default GalleryList;
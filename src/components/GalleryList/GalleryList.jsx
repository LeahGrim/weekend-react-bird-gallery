import GalleryItem from '../GalleryItem/GalleryItem.jsx'
import '../GalleryItem/GalleryItem.css'
import '../GalleryList/GalleryList.css'
function GalleryList({galleryList, getGallery, registerLikes}) {

    return(

              <div className= "containerForPics">
            {galleryList.map(picture => (
            <GalleryItem key = {picture.id}
                         picture = {picture}   
                         registerLikes= {registerLikes} />
             ))}
            
        </div>
       

    )
}
export default GalleryList;
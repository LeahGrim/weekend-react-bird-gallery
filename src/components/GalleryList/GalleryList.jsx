import GalleryItem from '../GalleryItem/GalleryItem.jsx'
import '../GalleryItem/GalleryItem.css'
import '../GalleryList/GalleryList.css'
function GalleryList({galleryList, getGallery, registerLikes}) {

    return(

              <div className= "containerForPics">
            {galleryList.map(picture => (
            <GalleryItem picture = {picture} key = {picture.id} getGallery= {getGallery} registerLikes= {registerLikes} />
             ))}
            
        </div>
       

    )
}
export default GalleryList;
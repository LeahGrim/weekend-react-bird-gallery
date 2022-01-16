import GalleryItem from '../GalleryItem/GalleryItem.jsx'
import '../GalleryItem/GalleryItem.css'
import '../GalleryList/GalleryList.css'
function GalleryList({galleryList, getGallery}) {

    return(

              <div className= "containerForPics">
            {galleryList.map(picture => (
            <GalleryItem picture = {picture} key = {picture.id} getGallery= {getGallery} />
             ))}
            
        </div>
       

    )
}
export default GalleryList;
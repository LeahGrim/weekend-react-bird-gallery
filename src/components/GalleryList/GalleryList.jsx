import GalleryItem from '../GalleryItem/GalleryItem.jsx'
import '../GalleryItem/GalleryItem.css'
import '../GalleryList/GalleryList.css'
function GalleryList({galleryList}) {

    return(

              <div className= "containerForPics">
            {galleryList.map(picture => (
            <GalleryItem picture = {picture} key = {picture.id}/>
             ))}
            
        </div>
       

    )
}
export default GalleryList;
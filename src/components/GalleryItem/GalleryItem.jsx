import './GalleryItem.css'


function GalleryItem({picture}){
    console.log('item we are destructuring,', picture);

    return(
      <>
    
      <div className= "pictureBox" key={picture.id}>
                <img className= "pics" src= {picture.path} />
                {picture.description}
                <div className="likes">
                Likes: {picture.likes} <br />
                </div>
                <button className= "Buttons"> Like </button>
                <button className= "Buttons">  Dislike  </button>
                </div>
      </>
    )
}
export default GalleryItem;
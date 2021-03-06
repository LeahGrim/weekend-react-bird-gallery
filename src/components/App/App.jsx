import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';


import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import GalleryList from '../GalleryList/GalleryList.jsx';

import './App.css';

function App() {

    //create an array that stores the gallery images
    //pair this with a function that pushes the gallery images (state) into the empty array
    let [galleryList, setGalleryList] = useState([]);

    //don't know what this does, but did this in the group project
    useEffect ( () => {
      getGallery();
    }, []);
    
    // Create a GET request that grabs the gallery photos from the server
    //and later pushes the images into the empty array using setGallery

    const getGallery = () => {
      //axios GET request 
      // requesting data from our server and later storing that data in the array "gallery" via setGalleryList
      axios.get('/gallery')
          .then((res)=> {
            console.log('GET request to grab gallery images on app.jsx: Success!!', res.data);
            
            //set the state (images from server = res.data) into the empty array (gallery)
            setGalleryList(res.data);
          })
          .catch((err) => {
            console.log('something funky happened on the app.jsx GET request', err);
          })
      }
      // function to register dislike both on the DOM and Server 
      const registerDislikes = (pictureToLike) => {
      axios({
          method: 'PUT',
          url: `/gallery/dislikes/${pictureToLike.id}`
      }).then(response => {
          console.log('PUT success on App.jsx, dislikes updated');
          getGallery();
      }).catch((error) => {
          console.log('something funky happened on the PUT request in the Apps.jsx', error);
      })

      }

      //not sure why I have to put galleryList here but tried it and it worked
      //Passing pictureToLike as a parameter for registerLikes 
      const registerLikes = (pictureToLike) => {
        axios({
          method: 'PUT',
          url: `/gallery/likes/${pictureToLike.id}`
        }).then(response => {
          console.log('PUT success on App.jsx, likes updated');

          getGallery();
        }).catch((error) => {
          console.log('something funky happened on the PUT request in the App.jsx', error);
        })
      }


  
    return (
      <div className="App">
        <Header />
           <div className='inspiration'> <h2>You're always being watched, so watch them back... Bird on!!</h2></div>
        {/* export the filled array from the GET request & 
        GET request itself to the subsequent jsx folder to display images where it is called on app.jsx*/}
        <GalleryList galleryList={galleryList} 
                     getGallery= {getGallery} 
                     registerLikes={registerLikes}
                     registerDislikes= {registerDislikes}/>
        <Footer />

      </div>
    );
}

export default App;

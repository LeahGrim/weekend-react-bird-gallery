import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';


import Header from '../Header/Header.jsx';
import GalleryList from '../GalleryList/GalleryList.jsx';

import './App.css';

function App() {

    //create an array that stores the gallery images
    //pair this with a function that pushes the gallery images (state) into the empty array
    let [galleryList, setGalleryList] = useState([]);

    //don't know what this does but did this in the group project
    useEffect ( () => {
      getGallery();
    }, []);
    
    // Create a GET request that grabs the gallery photos from the server
    //and later pushes the images into the empty array using setGallery

    const getGallery = () => {
      //axios GET request
      axios.get('/gallery')
          .then((res)=> {
            console.log('GET request to grab gallery images on app.jsx: Success!!', res.data);
            
            //store the state (images from server = res.data) into the empty array (gallery)
            setGalleryList(res.data);
          })
          .catch((err) => {
            console.log('something funky happened on the app.jsx GET request', err);
          })

    }




    return (
      <div className="App">
        <Header />
        <h2>You're always being watched, so watch them back... Bird on!!</h2>
        {/* export the filled array from the GET request & 
        GET request itself to the subsequent jsx folder to display images where it is called on app.jsx*/}
        <GalleryList galleryList={galleryList}/>
        
      </div>
    );
}

export default App;

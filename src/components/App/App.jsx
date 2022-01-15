import React from 'react';
import Header from '../Header/Header.jsx';
import GalleryImageList from '../GalleryImageList/GalleryImageList.jsx'

import './App.css';


function App() {
    return (
      <div className="App">
        <Header />
        <h2>Get your bird on!!</h2>
        <GalleryImageList />
  
      </div>
    );
}

export default App;

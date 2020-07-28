import React, { useState } from 'react';
import Joke from './Joke';
import Stories from './Story';
import Tasks from './Task';
import Gallery from './Gallery';
import Matrix from './Matrix';

function App() {

  const [userQuery, setUserQuery] = useState('');
  const [showGallery, setShowGallery] = useState(true);

  const updateUserQuery = (event) => {
    setUserQuery(event.target.value); //Asynchronous
    console.log(userQuery);
  }

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank');
  }

  const handleKeyPress = (event) => {
     if(event.key === 'Enter'){
       searchQuery();
     }
  }

  const toggleShowGallery = ( ) => {
    setShowGallery(!showGallery);
  }

  return (
    <div className="App">
      <h1>Hi Gayathri</h1>
      <div className="form">
        <input value={userQuery} onChange={updateUserQuery} onKeyPress={handleKeyPress} />
        <button onClick={searchQuery}>Submit</button>
      </div>
      <hr/>
      <Joke />
      <hr />
      <Tasks />
      <hr />
      <div>
        {
          showGallery? <Gallery /> : null
        }
        <button onClick={toggleShowGallery}>
          {showGallery ? 'Hide': 'Show'} Gallery
        </button>
      </div>
      <hr /> 
      <Stories />
      <hr />
      <Matrix />

    </div>
  );
}

export default App;

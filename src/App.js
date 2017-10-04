import React, {Component} from 'react';
import './App.css';
import AddPhotos from './AddPhotos';
import FindAlbum from './FindAlbum';
import ShowAllPhotos from './ShowAllPhotos';
import PhotoAlbum from './PhotoAlbum';
import picsArray from './pics.json';

    }
  }
  render() {
    return (
      <div className="App">
          <h1 className="App-title">My Photo Gallery</h1>

        <div className="App-intro">
          <AddPhotos />
          <FindAlbum />
          <ShowAllPhotos
            pics = {this.state.pics}
          />
          <PhotoAlbum />
        </div>
      </div>
    );
  }
}

export default App;

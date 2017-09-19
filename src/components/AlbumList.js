import React, { Component } from 'react';
// make scrollable
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  //initial state for albums is an empty array
  // we can now reference this.state.albums in the render function
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    //pass a promise when http request is complete
    //update the state to update the albums object to include response
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    // loop through all albums and map key/value pairs
    return this.state.albums.map(album =>
      //each component inside the array must have a key property
      //how React keeps track of re-rerenders and only updates the correct key
      //album prop passes entire album object down to AlbumDetail
        <AlbumDetail key={album.title} album={album} />
      );
  }

  render() {
    console.log(this.state);
    return (
      // wrap all list items to make scrollable
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;

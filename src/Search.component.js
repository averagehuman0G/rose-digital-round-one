import React, { Component } from 'react';
import AlbumInfo from './AlbumInfo.component';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const btnStyle = {
  margin: 12,
};

const inputStyle = {
  width: '50%',
};

class Search extends Component {
  constructor() {
    super();
    this.state = {
      albums: [],
      searchTerm: '',
      gallery: [],
    };
  }

  setsInputValue(e) {
    this.setState({ searchTerm: e.target.value });
  }

  addToGallery(id) {
    const album = this.state.albums.filter(album => album.key == id);
    const newGallery = this.state.gallery.slice();
    newGallery.push(album);
    this.setState({ gallery: newGallery });
  }

  searchAlbum() {
    //go fetch the albums
    let albums = [];
    fetch(
      `https://itunes.apple.com/search?media=music&entity=album&attribute=albumTerm&term=${encodeURIComponent(
        this.state.searchTerm
      )}`
    )
      .then(results => results.json())
      .then(data => {
        albums = data.results.map(album => <AlbumInfo album={album} addToGallery={this.addToGallery} />);
        const firstThreeAlbums = albums.slice(0, 3);
        this.setState({
          albums: firstThreeAlbums,
        });
      });
  }

  render() {
    return (
      <div className="inline">
        <TextField style={inputStyle} onChange={this.setsInputValue.bind(this)} hintText="Search for an album" />
        <br />
        <RaisedButton onClick={this.searchAlbum.bind(this)} label="Search" style={btnStyle} />

        {this.state.albums}
        {this.state.gallery}
      </div>
    );
  }
}

export default Search;

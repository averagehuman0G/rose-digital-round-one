import React, { Component } from 'react';
import Search from './Search.component';
// import Gallery from './Gallery.component';
import Results from './Results.component';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      albums: [],
      searchTerm: '',
      gallery: [],
    };
    this.searchAlbum = this.searchAlbum.bind(this);
    this.setsInputValue = this.setsInputValue.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);
    this.addToGallery = this.addToGallery.bind(this);
  }

  setsInputValue(e) {
    this.setState({ searchTerm: e.target.value });
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }

  addToGallery(id) {
    const album = this.state.albums.filter(album => album.key == id);
    const newGallery = this.state.gallery.slice();
    newGallery.push(album);
    this.setState({ gallery: newGallery });
  }

  searchAlbum() {
    debugger;
    fetch(
      `https://itunes.apple.com/search?media=music&entity=album&attribute=albumTerm&term=${encodeURIComponent(
        this.state.searchTerm
      )}`
    )
      .then(results => results.json())
      .then(data => {
        const albums = data.results.map(album => ({
          collectionId: album.collectionId,
          artworkUrl100: album.artworkUrl100,
          collectionName: album.collectionName,
          artistName: album.artistName,
          releaseDate: album.releaseDate,
        }));

        const firstThreeAlbums = albums.slice(0, 3);
        debugger;
        this.setState({
          albums: firstThreeAlbums,
        });
        debugger;
      });
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <RaisedButton onClick={this.toggleHidden} label="Search for an album" fullWidth={true} />
        </MuiThemeProvider>
        {!this.state.isHidden && <Search searchAlbum={this.searchAlbum} setsInputValue={this.setsInputValue} />}
        {!this.state.isHidden &&
          this.state.albums.length > 0 && (
            <Results albums={this.state.albums} addToGallery={this.addToGallery} toggleHidden={this.toggleHidden} />
          )}
        {/* {!this.state.isHidden && <SearchComponent />} */}
      </div>
    );
  }
}

export default App;

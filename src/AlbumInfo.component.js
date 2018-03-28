import React, { Component } from 'react';

class AlbumInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div key={this.props.album.collectionId} className="albumInfo">
        <img src={this.props.album.artworkUrl100} />
        <h1>{this.props.album.collectionName}</h1>
        <h2>{this.props.album.artistName}</h2>
        <h6>{this.props.album.releaseDate.slice(0, 5)}</h6>
        <button onClick={this.props.addToGallery(this.props.album.collectionId)}>+</button>
      </div>
    );
  }
}

export default AlbumInfo;

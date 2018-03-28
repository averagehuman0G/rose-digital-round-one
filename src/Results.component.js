import React, { Component } from 'react';
import AlbumInfo from './AlbumInfo.component';

class Results extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="results">
        <AlbumInfo album={this.props.albums[0]} addToGallery={this.props.addToGallery} />
        <AlbumInfo album={this.props.albums[1]} addToGallery={this.props.addToGallery} />
        <AlbumInfo album={this.props.albums[2]} addToGallery={this.props.addToGallery} />
        <button onClick={this.props.toggleHide}>Done</button>
      </div>
    );
  }
}

export default Results;

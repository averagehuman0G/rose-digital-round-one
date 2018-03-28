import React, { Component } from 'react';
import AlbumInfo from './AlbumInfo.component';

class Results extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="results">
        <AlbumInfo album={this.props.albums.slice(0, 1)} />
        <AlbumInfo album={this.props.albums.slice(1, 2)} />
        <AlbumInfo album={this.props.albums.slice(2)} />
      </div>
    );
  }
}

export default Results;

import React, { Component } from 'react';
import Search from './Search.component';
import Gallery from './Gallery.component';
import AlbumInfo from './Albuminfo.component';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import './App.css';

const style = {
  margin: 12,
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: true,
    };
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <RaisedButton onClick={this.toggleHidden.bind(this)} label="Search for an album" fullWidth={true} />
        {!this.state.isHidden && <SearchComponent />}
        {!this.state.isHidden && <SearchComponent />}
        {!this.state.isHidden && <SearchComponent />}
      </MuiThemeProvider>
    );
  }
}

export default App;

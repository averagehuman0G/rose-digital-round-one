import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const btnStyle = {
  margin: 12,
};

const inputStyle = {
  width: '50%',
};

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="inline">
        <MuiThemeProvider>
          <TextField style={inputStyle} onChange={this.props.setsInputValue} hintText="Search for an album" />
          <br />
          <RaisedButton onClick={this.props.searchAlbum} label="Search" style={btnStyle} />
        </MuiThemeProvider>
        {/* {this.state.albums}
        {this.state.gallery} */}
      </div>
    );
  }
}

export default Search;

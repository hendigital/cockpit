import './App.css';
import { Component } from 'react';
import React from 'react';
import Button from '@material-ui/core/Button';

class App extends Component {
  render(){
      return(
      <div style={{ width: '100%', float: 'left', display:'flex', margin: 'auto', flexWrap: 'wrap' }}>

        <div style={{ width: '100%', float: 'left', display:'flex', margin: 'auto', flexWrap: 'wrap' }}>
          <h3>Choose file here:</h3> <br />
        </div>

        <input type="file" accept="image/*" style={{ display: 'none' }} id="contained-button-file" />
      
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            Upload
          </Button>
        </label>

      </div>
      )
    }
}


export default App;

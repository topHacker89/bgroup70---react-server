import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';


class AgeSel extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div id="minMaxAge" >
           
                
                
                <TextField
          label="Minimum age"
          placeholder="Enter age"
          margin="normal"
          name="minAge" id="minAge" value={this.props.minAge} onChange={this.props.handleMinChange}
        />
                
                
              
            
                <TextField
          label="Maximum age"
          placeholder="Enter age"
          margin="normal"
          name="maxAge" id="maxAge" value={this.props.maxAge} onChange={this.props.handleMaxChange}
        />
            </div>
        )
    }
}

export default AgeSel;
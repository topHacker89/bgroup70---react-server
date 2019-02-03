import React from 'react';
import './App.css';


import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
  });

class GenderSel extends React.Component {
    constructor(props) {
        super(props);
       }
    render() {
        return (
            <div id="field" >
              
              <FormControl>
              <InputLabel htmlFor="gender">Gender</InputLabel>
                <Select
                 native
            value={this.props.selected_gender}
            onChange={this.props.handleGenChange}
            inputProps={{
                name: 'gender',
                id: 'gender',
              }}
          >

            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          
          </Select>
          </FormControl>
            </div>
        )
    }
}

export default GenderSel;





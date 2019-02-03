import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';


  class Loading extends React.Component {
render(){
    return (
      <div>
        <CircularProgress color="secondary" />
      </div>
    );
  }}

  export default Loading
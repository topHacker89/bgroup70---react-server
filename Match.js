import React from 'react';
import './App.css';


import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


class Match extends React.Component {

  render() {
    console.log("in match");
    console.log(this.props);
    //url = "http://proj.ruppin.ac.il/bgroup70/test1/tar3/Tinder/";
    let imgSrc = "../tar3/Tinder/";

    if(this.props.match.Image == "")
      if(this.props.match.Gender == "Female")
        imgSrc += "images/female.jpg";
      else
        imgSrc += "images/male.jpg";
    else
      imgSrc += this.props.match.Image;

    return (
      <div class="match">
        <Paper elevation={1}>
        <Typography variant="h5" component="h3">       
        <img src={imgSrc} alt="" />
        {this.props.match.Name + " "}
        {this.props.match.Age}
        </Typography>
        <Typography component="p">
        <h3>Gender: {this.props.match.Gender}</h3>
        <h3>Height: {this.props.match.Height}</h3>
        <h3>Location: {this.props.match.Address}</h3>
        </Typography>
      </Paper>
      </div>
    )
  }
}

export default Match;
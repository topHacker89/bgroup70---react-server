import React from 'react';
import './App.css';
import NextIcon from '@material-ui/icons/ArrowForwardIos';
import LikeIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';


import Match from './Match';




class Matches extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currMatch: 0
        }
        this.handleNextMatch = this.handleNextMatch.bind(this);

    }

    handleNextMatch() {
        if (this.state.currMatch >= (this.props.location.state.matches.length) - 1) {
            this.setState({ currMatch: 0 });
            return;
        }
        let temp = (this.state.currMatch) + 1;
        this.setState({ currMatch: temp });
        return;
    }

    render() {
        console.log("in matches");
        console.log(this.props.location.state.matches);
        if (this.props.location.state.matches.length > 0) {
            return (
                <div id="placeHolder">
                    <h2>Matches</h2>
                    <Button id="likeImg" color="secondary" onClick={this.handleNextMatch}  >
                        <LikeIcon style={{ fontSize: 40 }} />
                    </Button>
                    <Button id="nextBtn" color="secondary" onClick={this.handleNextMatch}  >
                        <NextIcon style={{ fontSize: 40 }} />
                    </Button>
                    <Match match={this.props.location.state.matches[this.state.currMatch]} key="Match" />
                </div>
            )
        }

        return (
            <div>
                <img id="sadImg" src="images\sad-512.png" alt="no match" />
                <h1>Sorry, no match for you.</h1>
            </div>
        )



    }
}

export default Matches;
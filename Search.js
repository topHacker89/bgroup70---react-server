import React from 'react';


import GenderSel from './GenderSel';
import AgeSel from './AgeSel';
import SearchIcon from '@material-ui/icons/Search'

import Button from '@material-ui/core/Button';




class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: [],
      startMatch: false,
      selected_gender: "",
      minAge: "",
      maxAge: "",
      error: ""
    }
    this.handleMatch = this.handleMatch.bind(this);
    this.handleGenChange = this.handleGenChange.bind(this);
    this.handleMinChange = this.handleMinChange.bind(this);
    this.handleMaxChange = this.handleMaxChange.bind(this);
  }

  handleErrors = (response) => {
    if(!response.ok){
      throw Error(response.statusText);
    }
    return response;
  }

  handleMatch() {

    let url;

    if(window.location.hostname === "localhost")
      url = "http://localhost:54248/api/persons";
    else
      url = "../tar3/api/persons";


    if (this.state.selected_gender === "" || this.state.minAge === "" || this.state.maxAge === "") {
      alert("One or more of the fields is missing");
      return 0;
      
    }
    if (this.state.matches.length > 0) {
      this.clearMatchesArray();
        //ERROR:Synchronous request    --> jquery-1.8.2.min.js:2 [Deprecation] Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.
      return 0;
    }

    this.props.history.push({
      pathname: '/loading'
    })

    this.setState({ startMatch: true });

    fetch(url)
      .then(this.handleErrors)
      .then(response => response.json())
      .then(data => this.appendMatchesArray(data))
      .catch(error => this.setState({error: "error getting users"}));
    
  }

  clearMatchesArray() {
    this.setState({ startMatch: false, matches: [] },()=>this.appendMatchesArray());
  }

  appendMatchesArray(data) {
    console.log("in search");
    console.log(data);
    data.map(
      (match) => {
        if (match.Gender === this.state.selected_gender & match.Age >= parseInt(this.state.minAge, 10) & match.Age <= parseInt(this.state.maxAge, 10)) {
          let temp = this.state.matches;
          temp.push(match);
          this.setState({ matches: temp });
        }
        console.log(this.state.matches);

        this.props.history.push({
          pathname: '/matches',
          state: { matches: this.state.matches }
        })
      
        return '<a href="/matches"/>'; 
      }
    )
  }

  handleGenChange(event) {
    this.setState({ selected_gender: event.target.value });
  }
  handleMinChange(event) {
    this.setState({ minAge: event.target.value });
  }
  handleMaxChange(event) {
    this.setState({ maxAge: event.target.value });
  }


  render() {
    return (
      <div data-role="content" id="content">
        <GenderSel selected_gender={this.state.selected_gender} handleGenChange={this.handleGenChange} key="GenSel" />
        <AgeSel
          minAge={this.state.minAge}
          maxAge={this.state.maxAge}
          handleMinChange={this.handleMinChange}
          handleMaxChange={this.handleMaxChange}
          key="AgeSel" />
     
          <Button variant="contained" onClick={this.handleMatch} color="secondary" >
              <SearchIcon />
          </Button>
       
      </div>
    )
  }
}


// <Matches matches={this.state.matches} key="Matches" startMatch={this.state.startMatch} />

// {startMatch ? '<DeleteBtn handleMatch={this.handleMatch} startMatch={this.state.startMatch} key="DeleteBtn"/>' : '<SearchBtn handleMatch={this.handleMatch} startMatch={this.state.startMatch} key="SearchBtn"/>'}

export default Search;
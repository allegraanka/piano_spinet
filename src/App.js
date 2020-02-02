import React from 'react';
import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      terms: [],
      resources: []
    }
  }

  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/https://sandbox.tinypass.com/api/v3/publisher/term/list?aid=eBGQWilSFK&api_token=lVgfKJRNHusQp6f4iWf6000UePfs2b5iyg0dzBMm')
    .then(response => response.json())
    .then(data => this.setState({ terms: data.terms}));
  }

  render() {
    return(
     <div className='App'>
       <CardList terms={this.state.terms}/>
     </div>
    );
  }
}

export default App;

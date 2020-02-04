import React from 'react';
import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { AppData } from './components/appData/app-data.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      appData: {},
      terms: [],
      termCount: "",
      resources: [],
      resourceCount: ""
    }
  }

  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/https://sandbox.tinypass.com/api/v3/publisher/term/list?aid=eBGQWilSFK&api_token=lVgfKJRNHusQp6f4iWf6000UePfs2b5iyg0dzBMm')
    .then(response => response.json())
    .then(data => this.setState({ terms: data.terms, termCount: data.total }));

    fetch('https://cors-anywhere.herokuapp.com/https://sandbox.tinypass.com/api/v3/publisher/app/get?aid=eBGQWilSFK&api_token=lVgfKJRNHusQp6f4iWf6000UePfs2b5iyg0dzBMm')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({ appData: data.app });
    });
  }

  render() {
    return(
     <div className='App'>
       <AppData appData={this.state.appData}/>
       <CardList terms={this.state.terms} termCount={this.state.termCount}/>
     </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import HomePageView from './views/Home';
import AllBeers from './views/AllBeers';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact component={HomePageView} />
            <Route path="/beers" exact component={AllBeers} />
            <Route path="/random-beer" exact />
            <Route path="/new-beer" exact />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import HomePageView from './views/Home';
import AllBeers from './views/AllBeers';
import Navbar from './components/Navbar';
import SingleBeer from './views/SingleBeer';
import RandomBeer from './views/RandomBeer';
import CreateBeer from './views/CreateBeer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact component={HomePageView} />
            <Route path="/beers" exact component={AllBeers} />
            <Route path="/beers/:id" component={SingleBeer} />
            <Route path="/random-beer" exact component={RandomBeer} />
            <Route path="/new-beer" exact component={CreateBeer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

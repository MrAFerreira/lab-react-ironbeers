import React, { Component } from 'react';
import { list as listAll } from './../../services/requestBeers';
import BeerDisplay from './../../components/BeerDisplay';

class AllBeers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    listAll()
      .then(beers => {
        console.log(beers);
        this.setState({
          beers
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.beers.map(item => (
          <BeerDisplay key={item._id} {...item} />
        ))}
      </div>
    );
  }
}

export default AllBeers;

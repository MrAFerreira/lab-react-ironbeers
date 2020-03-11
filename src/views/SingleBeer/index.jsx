import React, { Component } from 'react';
import { load } from './../../services/requestBeers';
import './style.scss';

class SingleBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {}
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const id = this.props.match.params.id;
    load(id)
      .then(beer => {
        console.log(beer);
        this.setState({
          beer
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const beer = this.state.beer;
    console.log(beer);
    return (
      <div>
        <section className="Single__display">
          <div className="Single__display__image">
            <img src={beer.image_url} alt={beer.name} />
          </div>
          <div className="Single__display_content">
            <h2>{beer.name}</h2>
            <h5>{beer.tagline}</h5>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
          </div>
        </section>
      </div>
    );
  }
}

export default SingleBeer;

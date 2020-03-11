import React, { Component } from 'react';
import { create } from './../../services/requestBeers';
import './style.scss';

class CreateBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: 0,
      contributed_by: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleFormSubmission() {
    const newBeer = {
      name: this.state.name,
      tagline: this.state.tagline,
      description: this.state.description,
      first_brewed: this.state.first_brewed,
      brewers_tips: this.state.brewers_tips,
      attenuation_level: this.state.attenuation_level,
      contributed_by: this.state.contributed_by
    };
    console.log(newBeer);
    create(newBeer);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const inputName = event.target.name;
    this.setState({
      [inputName]: value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmission}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Name your beer!"
              onChange={this.handleInputChange}
            ></input>
          </label>
          <label>
            Tagline:
            <input
              type="text"
              name="tagline"
              value={this.state.tagline}
              placeholder="Tagline for your beer"
              onChange={this.handleInputChange}
            ></input>
          </label>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={this.state.description}
              placeholder="Describe your beer"
              onChange={this.handleInputChange}
            ></input>
          </label>
          <label>
            First Brewed:
            <input
              type="text"
              name="first_brewed"
              value={this.state.first_brewed}
              placeholder="First time brewed"
              onChange={this.handleInputChange}
            ></input>
          </label>
          <label>
            Brewers Tips:
            <input
              type="text"
              name="brewers_tips"
              value={this.state.brewers_tips}
              placeholder="Share your tips!"
              onChange={this.handleInputChange}
            ></input>
          </label>
          <label>
            Attenuation Level:
            <input
              type="number"
              name="attenuation_level"
              value={this.state.attenuation_level}
              placeholder="Attenuation Level"
              onChange={this.handleInputChange}
            ></input>
          </label>
          <label>
            Contributed By:
            <input
              type="text"
              name="contributed_by"
              value={this.state.contributed_by}
              placeholder="Your name here!"
              onChange={this.handleInputChange}
            ></input>
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateBeer;

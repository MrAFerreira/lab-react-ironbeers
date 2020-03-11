import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com'
});

const list = () =>
  new Promise((resolve, reject) => {
    instance
      .get('/beers')
      .then(result => {
        const beers = result.data;
        resolve(beers);
      })
      .catch(reject);
  });

const load = id =>
  new Promise((resolve, reject) => {
    instance
      .get(`/beers/${id}`)
      .then(result => {
        const beer = result.data;
        resolve(beer);
      })
      .catch(reject);
  });

const random = () =>
  new Promise((resolve, reject) => {
    instance
      .get('/beers/random')
      .then(result => {
        const beer = result.data;
        resolve(beer);
      })
      .catch(reject);
  });

const create = newBeer =>
  new Promise((resolve, reject) => {
    instance
      .post('/beers/new', {
        name: newBeer.name,
        tagline: newBeer.tagline,
        description: newBeer.description,
        first_brewed: newBeer.first_brewed,
        brewers_tips: newBeer.brewers_tips,
        attenuation_level: newBeer.attenuation_level,
        contributed_by: newBeer.contributed_by
      })
      .then(response => {
        resolve(console.log(response));
      })
      .catch(reject);
  });

export { list, load, random, create };

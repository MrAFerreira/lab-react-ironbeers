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

export { list };

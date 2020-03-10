import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Link to="/beers">
          <section className="Link__card">
            <img src={process.env.PUBLIC_URL + '/images/beers.png'} alt="beers" />
            <h2>All beers</h2>
            <p>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae vulputate dui.
              Nulla facilisi. Vivamus non tincidunt elit. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Maecenas gravida tellus pretium, luctus nulla eu, semper nunc.
              Maecenas eu nisl diam. Morbi semper fringilla nisi non feugiat. Ut vehicula finibus
              laoreet. Ut suscipit a sapien in pellentesque. Aenean neque nisl, tincidunt
              consectetur elit at, pharetra consectetur enim.{' '}
            </p>
          </section>
        </Link>
        <Link to="/random-beer">
          <section className="Link__card">
            <img src={process.env.PUBLIC_URL + '/images/random-beer.png'} alt="random beer" />
            <h2>Random Beer</h2>
            <p>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae vulputate dui.
              Nulla facilisi. Vivamus non tincidunt elit. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Maecenas gravida tellus pretium, luctus nulla eu, semper nunc.
              Maecenas eu nisl diam. Morbi semper fringilla nisi non feugiat. Ut vehicula finibus
              laoreet. Ut suscipit a sapien in pellentesque. Aenean neque nisl, tincidunt
              consectetur elit at, pharetra consectetur enim.{' '}
            </p>
          </section>
        </Link>
        <Link to="/new-beer">
          <section className="Link__card">
            <img src={process.env.PUBLIC_URL + '/images/new-beer.png'} alt="new beer" />
            <h2>New Beer</h2>
            <p>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae vulputate dui.
              Nulla facilisi. Vivamus non tincidunt elit. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Maecenas gravida tellus pretium, luctus nulla eu, semper nunc.
              Maecenas eu nisl diam. Morbi semper fringilla nisi non feugiat. Ut vehicula finibus
              laoreet. Ut suscipit a sapien in pellentesque. Aenean neque nisl, tincidunt
              consectetur elit at, pharetra consectetur enim.{' '}
            </p>
          </section>
        </Link>
      </div>
    );
  }
}

export default HomePage;

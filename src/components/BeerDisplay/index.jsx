import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const BeerDisplay = props => {
  return (
    <Link to={`/beer/${props._id}`}>
      <section className="Display__card">
        <div className="Display__image">
          <img src={props.image_url} alt={props.name} />
        </div>
        <div className="Display_content">
          <h2>{props.name}</h2>
          <h5>{props.tagline}</h5>
          <p>{props.contributed_by}</p>
        </div>
      </section>
    </Link>
  );
};

export default BeerDisplay;

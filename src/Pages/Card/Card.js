import React, { useState } from 'react';
import './Card.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

const Card = ({ guideInfo }) => {
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("hourly");

  const handleQty = (e) => {
    setQty(e.target.value);
  };

  const handleOptions = (e) => {
    setSize(e.target.value);
  };

  const handleAddToCart = () => {
    alert(`Added to Cart: ${guideInfo.name}, Quantity: ${qty}, Size: ${size}`);
  };

  const handleCheckLocation = () => {
    alert(`Checking location for ${guideInfo.name}`);
  };

  const finalPrice = qty * guideInfo.options[size];

  return (
    <div className="card-container">
      <div className="input-location">
        <input placeholder="Search Location" />
        <button className="search-button">Search</button>
      </div>

      <div className="card mt-3">
        <img src={guideInfo.img} className="card-img-top" alt="Guide" />
        <div className="card-body">
          <h5 className="card-title">{guideInfo.name}</h5>
          <h6 className="card-title">{guideInfo.number}</h6>
          <p className="card-text">{guideInfo.description}</p>
          <div className="container container-select">
            <select className="select-quantity" onChange={handleQty}>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
            <select className="select-options" onChange={handleOptions}>
              {Object.keys(guideInfo.options).map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="price-info">₹{finalPrice}/-</div>
          </div>
          <hr />
          <div className="button-container">
            <button className="btn btn-add-to-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="btn btn-check-location" onClick={handleCheckLocation}>
              <Link to="/map">Check Location</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

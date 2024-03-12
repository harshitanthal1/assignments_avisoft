import React from 'react';

const Card = ({ item }) => (
  <div className="card" style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px', width: '200px' }}>
    <h2>{item.title}</h2>
    <p>{item.description}</p>
    <button style={{ backgroundColor: 'blue', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Add to Cart</button>
  </div>
);

export default Card;

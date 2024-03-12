import React from 'react';
import Card from './Card';

const Main = () => {
  const items = [
    { title: 'Item 1', description: 'Description for item 1' },
    { title: 'Item 2', description: 'Description for item 2' },
    { title: 'Item 3', description: 'Description for item 3' }
  ];

  return (
    <div className="main">
      {items.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
};

export default Main;

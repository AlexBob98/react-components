import Card from '../Card/Card';
import React from 'react';
import data from '../../data/data';
import './style.css';

class CardList extends React.Component {
  render() {
    return (
      <div className="card-list" data-id="card-id">
        {data.map((item) => (
          <div key={item.id} className="card-list__wheel">
            <Card {...item} />
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;

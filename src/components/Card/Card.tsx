import React from 'react';
import { ItemWheels } from 'interfaces/interface';

class Card extends React.Component<ItemWheels> {
  render() {
    const { name, img, inch, rimfull, other, constr, id } = this.props;

    return (
      <>
        <div className="item-card" data-name={name} data-num={id}></div>
        <h2 className="item-card__name">{name}</h2>
        <img src={img} alt={name} />
        <div className="item-card__characteristic">
          <div className="item-card__inch">
            <b>Inch:</b> <div className="inch">{[...inch].join(' / ')}</div>
          </div>
          <div className="rimfull">
            <b>RimFull:</b> {rimfull.toString().replace(/,/gi, ' / ')}
          </div>
          <div className="other">
            <b>Other:</b> {other.toString().replace(/,/gi, ' / ')}
          </div>
          <div className="constr">
            <b>Constr:</b> {constr}
          </div>
        </div>
      </>
    );
  }
}

export default Card;

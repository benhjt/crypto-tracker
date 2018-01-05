import React from 'react';


import './currency.css';
import { images } from '../../utils/CurrencyIcons.js';

const Currency = (props) => {
  const formattedPrice = new Intl.NumberFormat().format(props.currency.price_gbp);
  return (
    <div className="currency">
      <div className="currency__info">
        <span className="currency_name">
          <img className="currency__icon" src={images[props.currency.symbol]} alt="" />
          <strong>{props.currency.symbol}</strong>&nbsp;| {props.currency.name}
        </span>
        <span className="currency__price">
          £{formattedPrice}
        </span>
      </div>
      <div className="currency__performance">
        <span>
          <strong>24h:</strong> <span className={props.currency.percent_change_24h > 0 ? 'positive' : 'negative'}>{props.currency.percent_change_24h}%</span>
        </span>
        <span>
          <strong>7d:</strong> <span className={props.currency.percent_change_7d > 0 ? 'positive' : 'negative'}>{props.currency.percent_change_7d}%</span>
        </span>
      </div>
    </div>
  );
}

export default Currency;

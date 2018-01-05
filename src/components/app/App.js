import React, { Component } from 'react';

import Header from '../header/Header';
import Currency from '../currency/Currency';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch('https://api.coinmarketcap.com/v1/ticker/?convert=GBP&limit=10').then(response => {
      return response.json();
    }).then(currencies => {
      this.setState({
        currencies: currencies,
        loading: false
      });
    });
  }

  render() {
    const currencies = this.state.currencies.map((currency, index) => {
      return (
        <Currency currency={currency} key={index} />
      );
    });

    return (
      <div>
        <Header />
        <main className="container">
          <div className="currency-list">
            {currencies}
          </div>
        </main>
      </div>
    );
  }
}

export default App;

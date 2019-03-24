import React, { Component } from "react";
import formatNumber from "format-number";
import { withdraw5000, withdraw10000, giveAll } from "./actions";
import { store } from "./store";
import "./App.css";

class App extends Component {
  state = store.getState();


  get5000 = (e) => {
    console.log(this.state);
    store.dispatch(withdraw5000(e.target.dataset.amount));
  }

  get10000 = (e) => {
    console.log(this.state);
    store.dispatch(withdraw10000(e.target.dataset.amount));
  }

  giveCharity = (e) => {
    console.log(this.state);
    store.dispatch(giveAll());
  }

  render() {
  
    return (
      <div className="App">
        <img className="App__userpic" alt="user" />
        <p className="App__username">Hello, {store.getState().username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(store.getState().totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button data-amount="10000" onClick={this.get10000}>WITHDRAW $10,000</button>
          <button data-amount="5000" onClick={this.get5000}>WITHDRAW $5,000</button>
        </section>

        <p className="App__giveaway" onClick={this.giveCharity}>Give away all your cash to charity</p>
      </div>
    );
  }
}

export default App;

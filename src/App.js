import React, { Component } from 'react';
import './components/App.scss';   // app style

import AddOrder from './components/AddOrder'
import OrderList from './components/OrderList'

class App extends Component {
  state = {
    drinkList:[]
  }
  setDrinkList = (arr) => {
    this.setState({
      drinkList: [...arr],
    })
  }
  render() {
    const {drinkList} = this.state
    return (
    <div className="App">
      <div className="container">
        <h1 className="title text-center">Daily Drinks App 🧃</h1>
        <AddOrder 
          listArray={drinkList} 
          setDrinkList={this.setDrinkList}
        />
        <div className="crossline" />
        <OrderList drinkList="drinkList" />
      </div>
    </div>
    );
  }
}

export default App;
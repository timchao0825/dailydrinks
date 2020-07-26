import React, { Component } from 'react';
import './components/App.scss';

import AddOrder from './components/AddOrder/AddOrder'
import OrderList from './components/OrderList/OrderList'

const defaultList = [
  {
    isChecked:false,
    id:1,
    department:'A dept.',
    name:'Tim A',
    drinkName:'Green Tea',
    price:'35',
    note:'regular ice , quarter sugar',
  },
  {
    isChecked:false,
    id:2,
    department:'B dept.',
    name:'Tim B',
    drinkName:'Black Tea',
    price:'30',
    note:'regular ice , quarter sugar',
  }
];

function getIndex(val, arr, prop) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i][prop] === val) {
        return i;
    }
  }
  return -1;
}

class App extends Component {
  state = {
    drinkList:[...defaultList],
    showDeleteBtn:false,
  }
  setDrinkList = (arr) => {
    this.setState({
      drinkList: [...arr],
    })
  }
  handleCheck = (isCheck,id) => {
    const {drinkList} = this.state;
    const index = getIndex(id,drinkList,'id');
    const counter = [];
    drinkList[index].isChecked = isCheck;
    this.setState(this.state);
    drinkList.forEach(function(obj, index){
      if(obj.isChecked === true){
        counter.push(obj);
      }
    });
    if(counter.length > 0){
      this.state.showDeleteBtn = true;
    }else {
      this.state.showDeleteBtn = false;
    }
  }
  deleteList = () => {
    const listArray = this.state.drinkList;
    const keepList = [];
    listArray.forEach(function(obj, index){
      if(obj.isChecked !== true){
        keepList.push(listArray[index]);
      }
    });
    this.setState({
      drinkList: keepList,
      showDeleteBtn: false,
    });
  }
  render() {
    const {drinkList , showDeleteBtn} = this.state
    return (
    <div className="App">
      <div className="container">
        <h1 className="title text-center">Daily Drinks App 🧃</h1>
        <AddOrder
          listArray={drinkList} 
          setDrinkList={this.setDrinkList}
        />
        {/* <div className="crossline" /> */}
        <OrderList 
          showDeleteBtn={showDeleteBtn}
          drinkList={drinkList}
          deleteList={this.deleteList} 
          handleCheck={this.handleCheck}
        />
      </div>
    </div>
    );
  }
}

export default App;
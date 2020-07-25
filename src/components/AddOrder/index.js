import React, { Component } from 'react';
import './style.scss';

class index extends Component {
  state={
    list:[],
    department:'',
    name:'',
    drinkName:'',
    note:'',
    price:''
  }
  depChange = (e) => {
    this.setState({
      department:e.target.value,
    })
  }
  nameChange = (e) => {
    this.setState({
      name:e.target.value,
    })
  }
  drinkNameChange = (e) => {
    this.setState({
      drinkName:e.target.value,
    })
  }
  noteChange = (e) => {
    this.setState({
      note:e.target.value,
    })
  }
  priceChange = (e) => {
    this.setState({
      price:e.target.value,
    })
  }
  onSubmit = (e) =>{
    e.preventDefault();
    const id = 1 + Math.random();
    const {department , name , drinkName , note , price} = this.state;
    const drinkList = {
      id:id,
      department:department,
      name:name,
      drinkName:drinkName,
      note:note,
      price:price,
    };
    const list = [...this.state.list];
    list.push(drinkList);
    this.setState({
      list,
      department:'',
      name:'',
      drinkName:'',
      note:'',
      price:''
    })
    this.props.setDrinkList(list)
  }
  render() {
    const {department , name , drinkName , note , price} = this.state;
    return (
      <form
        className="addform" 
        onSubmit={this.onSubmit}
      >
        <div className="addform__group">
          <div className="addform__group__box">
          <input 
            onChange={this.depChange}
            type="text" 
            placeholder="Department" 
            value={department}
          />
          </div>
          <div className="addform__group__box">
          <input 
            onChange={this.nameChange}
            type="text" 
            placeholder="Name" 
            value={name}
          />
          </div>
          <div className="addform__group__box">
          <input 
            onChange={this.drinkNameChange}
            type="text" 
            placeholder="Drinkname" 
            value={drinkName}
          />
          </div>
          <div className="addform__group__box">
          <input 
            onChange={this.noteChange}
            type="text" 
            placeholder="Note" 
            value={note}
          />
          </div>
          <div className="addform__group__box">
          <input
            onChange={this.priceChange} 
            type="text" 
            placeholder="Price" 
            value={price}
          />
          </div>
        </div>
        
        <button type="submit">ADD</button>
      </form>
    );
  }
}

export default index;

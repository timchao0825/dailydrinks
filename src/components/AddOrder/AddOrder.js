import React, { Component } from 'react';
import './AddOrder.scss';

class AddOrder extends Component {
  state={
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
    const {department , name , drinkName , note , price} = this.state;
    const id = 1 + Math.random();
    const CreateDrinkList = {
      isChecked:false,
      id:id,
      department:department,
      name:name,
      drinkName:drinkName,
      price:price,
      note:note,
    };
    const list = [...this.props.listArray];
    list.push(CreateDrinkList);
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
          <label htmlFor="Department">Department:</label>
          <input 
            required
            onChange={this.depChange}
            type="text" 
            placeholder="Department" 
            value={department}
          />
          </div>
          <div className="addform__group__box">
          <label htmlFor="Department">Name:</label>
          <input 
            required
            onChange={this.nameChange}
            type="text" 
            placeholder="Name" 
            value={name}
          />
          </div>
          <div className="addform__group__box">
          <label htmlFor="Department">Drink Name:</label>
          <input 
            required
            onChange={this.drinkNameChange}
            type="text" 
            placeholder="Drink name" 
            value={drinkName}
          />
          </div>
          
          <div className="addform__group__box last">
          <label htmlFor="Department">Price:</label>
          <input
            required
            onChange={this.priceChange} 
            type="text" 
            placeholder="Price" 
            value={price}
          />
          </div>
          <div className="addform__group__box textarea">
          <label htmlFor="Department">Note:</label>
          <textarea
            rows="3"
            required
            onChange={this.noteChange}
            placeholder="Note" 
            value={note}
          />
          </div>
        </div>
        
        <button type="submit">ADD</button>
      </form>
    );
  }
}

export default AddOrder;

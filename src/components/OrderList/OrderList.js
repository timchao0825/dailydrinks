import React, { Component } from 'react';
import './OrderList.scss'

import Listitem from './ListItem/ListItem';

class OrderList extends Component {
  checkChange = (e) =>{
    const isCheck = e.target.checked;
    const id = parseFloat(e.target.getAttribute('data-id'));
    this.props.handleCheck(isCheck,id);
  }
  render() {
    const {drinkList,deleteList,showDeleteBtn} = this.props;
    const showDeleteBtnClass = showDeleteBtn ? 'is-show' : '';
    return (
      <div className="list__container">
        <div className="list__container__title">
          <div className="department">Department</div>
          <div className="name">Name</div>
          <div className="drink">Drink Name</div>
          <div className="note">Note</div>
          <div className="price">Price</div>
        </div>
        <ul className="list__wrap">
          {drinkList.map(
            (value) => {
              return <li key={value.id} className="list__box">
              <div className="list__box__checkbox">
                <input 
                  type="checkbox" 
                  data-id={value.id}
                  onChange={this.checkChange}
                />
              </div>
              <div className="list__box__item">
                <Listitem
                  type="department"
                  inputVal={value.department}
                />
                <Listitem
                  type="name"
                  inputVal={value.name}
                />
                <Listitem
                  type="drinkName"
                  inputVal={value.drinkName}
                />
                <Listitem
                  type="detail"
                  inputVal={value.note}
                />
                <Listitem
                  type="price"
                  inputVal={value.price}
                />
              </div>
            </li>
            }
          )}
        </ul>
      
        <button className={`delete__button ${showDeleteBtnClass}`} onClick={deleteList}>Delete</button>
      </div>
    );
  }
}

export default OrderList;
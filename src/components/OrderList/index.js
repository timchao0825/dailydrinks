import React, { Component } from 'react';
import './style.scss' // orderlist style

import Listitem from './ListItem';

class index extends Component {
  render() {
    // const {drinkList} = this.props;
    console.log(this.props.drinkList);
    return (
      <div className="list__container">
        <ul className="list__wrap">
          <li className="list__box">
            <div className="list__box__checkbox">
              <input type="checkbox" />
            </div>
            
            <div className="list__box__item">
              <Listitem
                type="department"
                inputVal="17 live"
              />
              <Listitem
                type="name"
                inputVal="Tim Chao"
              />
              <Listitem
                type="drinkName"
                inputVal="Green Tea"
              />
              <Listitem
                type="detail"
                inputVal="regular ice , quarter sugar"
              />
              <Listitem
                type="price"
                inputVal="35"
              />
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default index;
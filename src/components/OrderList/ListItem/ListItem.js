import React, { Component } from 'react';

import Editform from '../EditForm/EditForm'; 
import './ListItem.scss';

class ListItem extends Component {
  state = {
    isEdit: false,
    inputVal: this.props.inputVal,
    itemType: this.props.type,
  }
  checkEdit = () => {
    this.setState(
      (prevState, props) => ({
        isEdit: !prevState.isEdit,
      }),
    )
  }
  changeInputVal = (val) => {
    this.setState(
      (prevState, props) => ({
        inputVal:val,
      }),
    )
  }
  render() {
    const {isEdit , inputVal , itemType} = this.state;
    return (
      <div
        onClick={this.checkEdit}
        className={`${itemType}`}
      >
        { 
          itemType === "price"
          ? "$" + inputVal
          : inputVal
        }
        <Editform
          changeInputVal={this.changeInputVal}
          checkEdit={this.checkEdit}
          isEdit={isEdit}
          type={itemType}
          inputVal={inputVal}
        />
      </div>
    );
  }
}

export default ListItem;

import React, { Component } from 'react';

import './EditForm.scss';

class EditForm extends Component {
  state = {
    inputVal:this.props.inputVal,
  }
  onChangeText = (e) =>{
    this.setState({
      inputVal:e.target.value,
    })
  }
  handleFormClick = (e) => { e.stopPropagation(); }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.checkEdit();
    this.props.changeInputVal(this.state.inputVal);
  }
  render() {
    const {isEdit,type,inputVal} = this.props;
    const showFormClass = isEdit ? 'is-show' : '';
    return (
      <form 
      onClick={this.handleFormClick}
      onSubmit={this.onSubmit}
      className={`list__box__item__editform ${showFormClass}`}>
        {
          type === "detail"
          ?
          <textarea
          onChange={this.onChangeText}
          className="list__box__item__editform__textarea" 
          defaultValue={inputVal}
          />
          :
          <input
          onChange={this.onChangeText}
          className="list__box__item__editform__text"
          type="text"
          defaultValue={inputVal}
          />
        }
        <button
        className="list__box__item__editform__submit"
        type="submit">Save</button>
      </form>
    );
  }
}

export default EditForm;

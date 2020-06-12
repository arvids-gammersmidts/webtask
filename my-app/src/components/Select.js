import React, { Component } from 'react';

class Select extends Component {
  render() {
      return (
      <select id="type">
        <option value="dvd">DVD</option>
        <option value="furniture">Furniture</option>
        <option value="book">Book</option>
      </select>
    );
  }
}

export default Select
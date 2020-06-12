import React, { Component } from 'react';

class FormField extends Component {
  render(){ 
    return (
      <div className="form-group" id={this.props.field.id} onClick={() => this.props.onClick(this.props.field)}>
        <label htmlFor={this.props.field.names}>{this.props.field.name + " " + this.props.field.value}</label>
        {this.props.children}
      </div>
  );
  }
}

export default FormField
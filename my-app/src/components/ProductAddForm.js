import React, { Component } from 'react';
import FormField from './FormField';
import TextInput from './TextInput';
import Select from './Select';

class ProductAddForm extends Component {
  state = {
    fields : [
      {id: 0, value : 0, name: "Sku", type: "select"},
      {id: 1, value : 0, name: "Name", type: "text"},
      {id: 2, value : 1, name: "VVV", type: "text"},
      {id: 3, value : 2, name: "zZZ", type: "text"},
    ]
  }

  constructor(props){
    console.log("Constructor executed");
    super(props);
  }

  handleFormClick = field => {
    const fieldsCopy = [...this.state.fields];
    const index = fieldsCopy.indexOf(field);
    fieldsCopy[index] = {...field};
    fieldsCopy[index].value++;
    this.setState({fields: fieldsCopy});
  }

  render() { 
    console.log("render executed");
    return (
      <div className="add-product_container">
        <form>
          {this.state.fields.map(field => (
            <FormField key={field.id} field={field} onClick={this.handleFormClick}>
              {field.type === "text" ? <TextInput/> : <Select/>}
            </FormField>
          ))}
        </form>
      </div>
    );
  }
}

export default ProductAddForm
import React from 'react';
import TextInput from './TextInput';

function FormField() {
  return (
    <div class="form-group">
      <label for="sku">Sku:</label>
      <TextInput/>
    </div>
  );
}

export default FormField
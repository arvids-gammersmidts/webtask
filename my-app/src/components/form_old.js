import React from 'react';
import FormField from './FormField';

function ProductAddForm() {
  return (
    <div className="add-product_container">
      <form>
        <FormField/>
        <FormField/>
        <FormField/>
        <FormField/>
        <FormField/>
      </form>
    </div>
  );
}

export default ProductAddForm
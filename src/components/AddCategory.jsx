import PropTypes from 'prop-types';
import { useState } from 'react';

export const AddCategory = ({handleAddCategory}) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length <= 1) return;
    handleAddCategory(value);    
    setValue('');
  }

  return (
    <form onClick={onSubmit} >
        <input
         type="text" 
         placeholder='Add Category'
         value={value}
         onChange={e => handleChange(e)}
         />
         
        <button >Add</button>
    </form>
    
  )
}


AddCategory.propTypes = {
  handleAddCategory: PropTypes.func.isRequired
}



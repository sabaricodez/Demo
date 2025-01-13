import React from 'react';

const Dropdown = ({ onActionSelect }) => {
  const handleChange = (e) => {
    onActionSelect(e.target.value);
  };

  return (
    <select onChange={handleChange}>
      <option value="plus">Plus</option>
      <option value="minus">Minus</option>
      <option value="reset">Reset</option>
    </select>
  );
};

export default Dropdown;

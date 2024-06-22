/*
History
Date        Who          WHAT
21-JUN-2024 Shane Wilson Intial version
*/

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div>
      <input type="text" size="35" value={input} onChange={handleChange} placeholder="Search by name, language, or currency" />
    </div>
  );
};

export default SearchBar;

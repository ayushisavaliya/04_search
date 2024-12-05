import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search by name or email"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      style={{
        marginBottom: '20px',
        padding: '10px',
        width: '100%',
        maxWidth: '400px',
        fontSize: '16px',
      }}
    />
  );
};

export default SearchBar;

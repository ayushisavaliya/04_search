import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import Table from './Components/Table';

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");


  const data = [
    { id: 1, name: "ayushi", email: "ayushi@example.com", age: 25 },
    { id: 2, name: "rucha", email: "rucha@example.com", age: 30 },
    { id: 3, name: "nensi", email: "nensi@example.com", age: 35 },
    { id: 4, name: "riddhi", email: "riddhi@example.com", age: 28 },
  ];

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Table Filter Example</h1>
    
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    
      <Table data={filteredData} />
    </div>
  );
};

export default App;

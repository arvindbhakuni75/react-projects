import React, { useState } from 'react';

const CrudApp = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim() !== '') {
      const newItem = {
        id: Date.now(),
        name: inputValue
      };

      setItems([...items, newItem]);
      setInputValue('');
    }
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  const updateItem = (id) => {
   
    const updatedItems = items.map(item => {
      if (item.id === id) {
        setInputValue(item.name)
        return {
          ...item,
          name: inputValue
        };
      }
      return item;
    });
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>CRUD App</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>

      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
            <button onClick={() => updateItem(item.id)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudApp;

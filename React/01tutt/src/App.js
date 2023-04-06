// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';


function App() {

    const [items, setItems] = useState([
      {
          id: 1,
          checked: true,
          item: 'Item 1'
      },
      {
          id: 2,
          checked: false,
          item: 'Item 2'
      },
      {
          id: 3,
          checked: true,
          item: 'Item 3'
      },
  ]);

  const [newItem, setNewItem] = useState('');

  const addItem = (itemName) => {
    const id = newItem ? items[items.length-1].id + 1 : 1;
    const addingItem = {id: id, checked:false, item:itemName};
    const itemlist = [...items, addingItem];
    setAndSave(itemlist);
  }

  const setAndSave = (itemList) => {
    setItems(itemList);
    localStorage.setItem('shoppingList', JSON.stringify(itemList));
  }
  const handleCheck = (id) => {
      const newItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
      setAndSave(newItems);
  }

  const handleDelete = (id) => {
      const newItems = items.filter((item) => item.id !== id);
      setAndSave(newItems);
  }

  const handleAddItemSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className="App">
      <Header />
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleAddItemSubmit={handleAddItemSubmit}
      />
      <Content 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer />
    </div>
  );
}

export default App;

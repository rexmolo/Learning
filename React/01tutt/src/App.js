// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';


function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')) || []);

  const [newItem, setNewItem] = useState('');
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(items));
  }, [items]);

  const addItem = (itemName) => {
    const id = items.length ? items[items.length-1].id + 1 : 1;
    const addingItem = {id: id, checked:false, item:itemName};
    const itemlist = [...items, addingItem];
    // setAndSave(itemlist);
    setItems(itemlist);
  }

  // const setAndSave = (itemList) => {
  //   setItems(itemList);
  //   localStorage.setItem('shoppingList', JSON.stringify(itemList));
  // }
  const handleCheck = (id) => {
      const newItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
      // setAndSave(newItems);
      setItems(newItems);
  }

  const handleDelete = (id) => {
      const newItems = items.filter((item) => item.id !== id);
      // setAndSave(newItems);
      setItems(newItems);
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
      <SearchItem
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Content 
        items={items.filter(item => ((item.item).toLowerCase()).includes(searchValue.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer />
    </div>
  );
}

export default App;


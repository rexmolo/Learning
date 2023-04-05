// import logo from './logo.svg';
import './App.css';
import Header from './Header';
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


  const handleCheck = (id) => {
      const newItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
      setItems(newItems)
  }

  const handleDelete = (id) => {
      const newItems = items.filter((item) => item.id !== id);
      setItems(newItems)
  }

  return (
    <div className="App">
      <Header />
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

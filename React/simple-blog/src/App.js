

import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import Post from './Post';
import PostPage from './PostPage';
import About from './About';
import MissingPage from './MissingPage';
import Footer from './Footer';

import {Route, Routes, useHistory} from 'react-router-dom';
import {useEffect, useState} from 'react';
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/post">
          <Post />
        </Route>
        <Route path="/post/:id">
          <PostPage />
        </Route>
        <Route path="/about" element={About} />
        <Route path="/MissingPage" element={MissingPage} />
      </Routes>  
      <Footer />
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';

import {useReducer} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Homepage from './Router/Homepage';
import AboutMe from './Router/AboutMe';

const reducer = (state, action) => {
  if(action.type === 'ride') return {money:state.money + 10};
  if(action.type === 'fuel') return {money: state.money - 50};

  return new Error();
}

function App() {

  const initialState = {money: 10};
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">

    <nav className="nav">
      <Link to="/Router" className='nav-item'>Homepage</Link>
      &nbsp;
      <Link to="/Router/about-me" className='nav-item'>AboutMe</Link>
    </nav>



    <Routes>
      <Route path="/Router" element={ <Homepage /> } />
      <Route path="/Router/about-me" element={<AboutMe />} />
    </Routes>


      {/* <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({type: 'ride'})}>
        a new customer!
        </button>
        <button onClick={() => dispatch({type: 'fuel'})}>
    refill the tank!
        </button>
      </div> */}

    </div>
  );
}

export default App;

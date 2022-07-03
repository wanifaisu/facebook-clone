import React from 'react';

import Login from './Login';

import { useStateValue } from './StateProvider';

import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Users from './Users/Users';
import Header from './Header';
function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    // Bem
    <div className='app'>
      {!user ? (
        <Login />
      ) : (
        <>
          {/* <Header /> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<Users />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;

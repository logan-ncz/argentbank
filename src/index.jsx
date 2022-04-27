import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './sass/main.scss';

import Home from './pages/Home';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import Footer from './components/Footer';
import Nav from './components/Nav';

import { Provider } from 'react-redux';
import store from './redux/store';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<UserProfile />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

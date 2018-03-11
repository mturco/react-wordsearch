import React from 'react';
import { NavLink } from 'react-router-dom';
import './AppHeader.css';

const AppHeader = () => (
  <div className="AppHeader">
    <NavLink to="/" className="AppHeader-link AppHeader-link--logo">React Wordsearch</NavLink>
  </div>
);

export default AppHeader;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import AppHeader from './components/AppHeader';
import Editor from './components/Editor';

const App = () => (
  <div className="App">
    <div className="App-container">
      <AppHeader />
      <Switch>
        <Route exact path="/" component={Editor} />
      </Switch>
    </div>
  </div>
);

export default App;

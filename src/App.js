import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Editor from './components/Editor';

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={Editor} />
    </Switch>
  </div>
);

export default App;

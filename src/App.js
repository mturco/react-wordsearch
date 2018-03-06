import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Editor from './components/Editor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Editor}/>
        </Switch>
      </div>
    );
  }
}

export default App;

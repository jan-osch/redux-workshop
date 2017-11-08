import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Provider } from 'react-redux';

import TaskList from './TaskList';
import store from '../redux/store';
import AddTaskForm from './AddTaskForm';
import Articles from './Articles';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <img src={logo} className="App-logo" alt="logo"/>
          <TaskList/>
          <AddTaskForm/>
          <Articles/>
        </div>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import Main from './components/Main/Main.js'
class App extends Component {

  componentDidMount() {
    // call default function to display redux operation
    // this.props.defaultFunction();
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 id="header">todos</h1>
        </header>  
          <Main />
        <div className="text-info">
            <p>Double-click to edit a todo</p>
            <p>Created by phamhuy</p>
        </div>
      </div>
    );
  }
}
// export default App;
// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(App);

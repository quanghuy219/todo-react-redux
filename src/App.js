import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import Main from './components/Main/Main.js'
import Footer from './components/Footer/Footer';
import FormInput from './components/FormInput/FormInput';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import * as Actions from './actions';
import StorageService from './utils/StorageService';

class App extends Component {

  // Load data from local storage
  componentDidMount() {
      const todos = StorageService.get("todos") || [];
      this.props.addTodos(todos);
  }

  // Save changes in local storage
  componentDidUpdate() {
    StorageService.set("todos", this.props.todos)
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 id="header">todos</h1>
        </header> 

          <div className="main">
            <FormInput />
            <Main />
          </div>

          <Footer />
      </div>
    );
  }
}
// export default App;
// function to convert the global state obtained from redux to local props
const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodos: (todos) => dispatch(Actions.addTodos(todos))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import Main from './components/Main/Main.js'
import Footer from './components/Footer/Footer';
class App extends Component {


  render() {
    return (
      <div className="App">
        <header>
          <h1 id="header">todos</h1>
        </header> 

          <Main />

          <Footer />
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

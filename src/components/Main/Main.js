import React, {Component} from 'react';
import './Main.css';
import TodoList from './TodoList/TodoList';
import FooterFilter from './FooterFilter/FooterFilter.js';
import {BrowserRouter as Router ,Route ,Redirect} from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div className="main-section">
                    
                        <Route path='/:view?' component={TodoList}/>
                        <FooterFilter />
                    
                </div>
            </Router>
        )
    }
}


export default Main;
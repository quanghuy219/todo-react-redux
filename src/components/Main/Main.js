import React, {Component} from 'react';
import './Main.css';
import TodoList from './TodoList/TodoList';
import FooterFilter from './FooterFilter/FooterFilter.js';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div className="main-section">
                    <TodoList />

                    <FooterFilter />
                </div>
        )
    }
}


export default Main;
import React, {Component} from 'react';
import './Main.css';
import TodoList from './TodoList/TodoList';
import FooterFilter from './FooterFilter/FooterFilter.js';
import FormInput from './FormInput/FormInput';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="main">

                    <FormInput />

                    <TodoList />

                    <FooterFilter />
                </div>
            </div>
        )
    }
}


export default Main;
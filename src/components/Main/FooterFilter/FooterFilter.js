import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Actions from '../../../actions';
import './FooterFilter.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    triggerClearComplete = () => {
        this.props.clearCompleted()
    }

    render() {
        const show = {
            dispay: "inherit"
        }
        const hide = {
            display: "none"
        }
        return (
                <footer className="footer" style={this.props.todos.length ? show : hide}>
                    <p className="todo-count">
                        {
                        this.props.todos.filter(todo => !todo.completed).length
                        } items left
                    </p>
                    <ul>
                        <li><Link to="/" className={(this.props.visibilityFilter == "SHOW_ALL") ? "selected" : ""}>
                        All
                        </Link></li>
                        <li><Link to="/active" className={(this.props.visibilityFilter == "SHOW_ACTIVE") ? "selected" : ""} >
                        Active
                        </Link></li>
                        <li><Link to="/completed" className={(this.props.visibilityFilter == "SHOW_COMPLETED") ? "selected" : ""} >
                        Completed
                        </Link></li>
                    </ul>

                    <button href="#" className="clear"  onClick={this.triggerClearComplete} disabled={ this.props.todos.filter(todo => todo.completed).length ? false : true}>Clear completed</button>
                </footer>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        visibilityFilter: state.visibilityFilter,
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCompleted: () => {
            dispatch(Actions.clearCompleted())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Footer);
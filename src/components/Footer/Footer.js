import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Actions from '../../actions';

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
                <li><a href="#" className={(this.props.visibilityFilter == "SHOW_ALL") ? "selected" : ""} onClick={
                    () => {
                        this.props.setVisibilityFilter("SHOW_ALL")
                    }
                }>
                All
                </a></li>
                <li><a href="#" className={(this.props.visibilityFilter == "SHOW_ACTIVE") ? "selected" : ""} onClick={
                    () => {
                        this.props.setVisibilityFilter("SHOW_ACTIVE")
                    }
                }>
                Active
                </a></li>
                <li><a href="#" className={(this.props.visibilityFilter == "SHOW_COMPLETED") ? "selected" : ""} onClick={
                    () => {
                        this.props.setVisibilityFilter("SHOW_COMPLETED")
                    } 
                }>
                Completed
                </a></li>
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
        setVisibilityFilter: (filter) => {
            dispatch(Actions.setVisibilityFilter(filter))
        },
        clearCompleted: () => {
            dispatch(Actions.clearCompleted())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Footer);
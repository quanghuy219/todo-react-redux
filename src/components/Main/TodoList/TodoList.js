import React, {Component} from 'react';
import {connect} from 'react-redux';
import Item from "./Item/Item";
import * as Actions from '../../../actions';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    // Change all todo.completed to true when checkbox is checked, false when checkbox is unchecked
    toggleAll = (e) => {
        if(e.target.checked) {          // Check all todos
            this.props.toggleAll()
        } else {
            this.props.untoggleAll()    // Uncheck all
        }
    } 


    render() {
        const show = {
            dispay: "inherit"
        }
        const hide = {
            display: "none"
        }
        return (
            <section id="todo-list">
                <input className="toggle-all" 
                        style={ this.props.todos.length ? show : hide } type="checkbox" onChange={this.toggleAll} 
                        // checkbox checked when all todo.completed = true
                        checked={ 
                            !this.props.todos.filter(todo => !todo.completed).length  
                        }/>      
                <ul className="todo-list">
                {
                    this.props.todos.map( todo => {
                        return <Item key={todo.id} todo={todo} />
                    })                
                }  
                </ul>
            </section>
        )
    }
}

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
      case 'SHOW_ALL':
      default:
        return todos
    }
}
const mapStateToProps = state => {
    return {
      todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // Check all
        toggleAll: () => {
            dispatch(Actions.toggleAll())
        },
        // Uncheck all
        untoggleAll: () => {
            dispatch(Actions.untoggleAll())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);

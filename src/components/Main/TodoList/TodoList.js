import React, {Component} from 'react';
import {connect} from 'react-redux';
import Item from "./Item/Item";
import * as Actions from '../../../actions';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    // Update view base on  url param $(view)
    componentWillUpdate(nextProps) {
        const view = nextProps.location.hash || "#/"

        switch(view) {
            case "#/":
                return this.props.setVisibilityFilter("SHOW_ALL");
            case "#/active":
                return this.props.setVisibilityFilter("SHOW_ACTIVE");
            case "#/completed":
                return this.props.setVisibilityFilter("SHOW_COMPLETED");
            default: 
                return;
        }
    }

    // Change all todo.completed to true when checkbox is checked, false when checkbox is unchecked
    toggleAll = (e) => {
        if(e.target.checked) {          // Check all todos
            this.props.toggleAll()
        } else {
            this.props.untoggleAll()    // Uncheck all
        }
    }

    // Show todos list arcording to reducer visibilityFilter
    getVisibleTodos = (filter) => {
        switch (filter) {
          case 'SHOW_COMPLETED':
            return this.props.todos.filter(t => t.completed)
          case 'SHOW_ACTIVE':
            return this.props.todos.filter(t => !t.completed)
          case 'SHOW_ALL':
          default:
            return this.props.todos
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
                    this.getVisibleTodos(this.props.filter).map( todo => {
                        return <Item key={todo.id} todo={todo} />
                    })                
                }  
                </ul>
            </section>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      todos: state.todos,
      filter: state.visibilityFilter
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
        },
        setVisibilityFilter:(filter) => {
            dispatch(Actions.setVisibilityFilter(filter))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);

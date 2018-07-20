import React, {Component} from 'react';
import './Main.css';
import Task from '../Task/Task.js';
import Footer from '../Footer/Footer.js';
import {connect} from 'react-redux';
import *  as Actions from '../../actions';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })

    }

    handleKeyDown = (e) => {
        if(e.keyCode === 13) {
            if(!this.state.input) return false;

            this.props.addTodo(this.state.input)
            this.setState({
                input: ''
            })
        }   
    }

    toggleAll = (e) => {
        if(e.target.checked) {
            this.props.toggleAll()
        } else {
            this.props.untoggleAll()
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
            <div className="container">
                <div className="main">
                   
                    <section id="input-form">
                        <input value={this.state.input} onChange={this.handleChange} onKeyDown={this.handleKeyDown} placeholder="What needs to be done?"/>
                    </section>

                    <section id="todo-list">
                        <input className="toggle-all" style={ this.props.todos.length ? show : hide } type="checkbox" onChange={this.toggleAll} checked={
                            !this.props.todos.filter(todo => !todo.completed).length
                        }/>
                        <ul className="todo-list">
                            {
                                this.props.todos.map( todo => {
                                    return <Task key={todo.id} todo={todo} />
                                })
                                
                            }  
                        </ul>
                    </section>

                    {/* Footer Component */}

                    <Footer updateView={this.updateView} todos={this.props.todos} clearCompletedTasks={this.clearCompletedTasks}/>
                </div>
            </div>
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
        addTodo: text => {
            dispatch(Actions.addTodo(text))
        },
        toggleAll: () => {
            dispatch(Actions.toggleAll())
        },
        untoggleAll: () => {
            dispatch(Actions.untoggleAll())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
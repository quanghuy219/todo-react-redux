import React, {Component} from 'react';
import './Item.css';
import * as Actions from "../../../../actions";
import {connect} from 'react-redux';

class Item extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            text: this.props.todo.text
        }
    }

    // Set todo.completed = !todo.completed on checkbox change
    handleCheckbox = (e) => { 
        this.props.toggleTodo(this.props.todo.id);
    }

    // Delete an item
    handleClickDeleteBtn = () => {
        this.props.deleteTodo(this.props.todo.id);
    }

    editTodo = () => {
        this.setState({
            editing: true
        })
    }


    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
        
    }

    // Edit text in an item in todos state
    saveChanges = (e) => {
        this.setState({
            editing: false,
        })

        this.props.editTodo(this.props.todo.id, this.state.text)
    }

    handleKeyDown = (e) => {
        if(e.keyCode == 13) 
            this.saveChanges(e);
        
    }

    render() {  
        const listTodo = (
            <div className="view">
                    <input className="toggle" type="checkbox" onChange={this.handleCheckbox} checked={this.props.todo.completed} />
                    <label className={this.props.todo.completed ? "completed" : ""} onDoubleClick={this.editTodo}>{this.props.todo.text}</label>
                    <button className="delete" onClick={this.handleClickDeleteBtn}><i className="fa fa-times"></i></button>
            </div>
        )
        const editInput = (
            <input className="edit" value={this.state.text} onChange={this.handleChange} onBlur={this.saveChanges} onKeyDown={this.handleKeyDown}  autoFocus/>
        )
            
        
        return (
            <li className={this.state.editing ? "editing" : ""} >
               {
                   // state.editing = true : show input
                   this.state.editing ? editInput : listTodo
               }
            </li>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodo: (id) => {
            dispatch(Actions.toggleTodo(id))
        },
        editTodo: (id, text) => {
            dispatch(Actions.editTodo(id,text))
        },
        deleteTodo: (id) => {
            dispatch(Actions.deleteTodo(id))
        }
    }
}

export default connect(null,mapDispatchToProps)(Item);;
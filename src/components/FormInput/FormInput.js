import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Actions from '../../actions';

class FormInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        }
    }

    // Update input state 
    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })

    }

    handleKeyDown = (e) => {
        if(e.keyCode === 13) {  //Adding new todo when hitting enter
            if(!this.state.input) return false;     // remove empty string

            this.props.addTodo(this.state.input)
            this.setState({
                input: ''
            })
        }   
    }

    render() {
        return (
            <section id="input-form">
                <input value={this.state.input} onChange={this.handleChange} onKeyDown={this.handleKeyDown} placeholder="What needs to be done?" />
            </section>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: text => {
            dispatch(Actions.addTodo(text))
        }
    }
}
export default connect(null,mapDispatchToProps)(FormInput);
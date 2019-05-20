import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component{
    render() {
        return(
        //Cannot use class attribute for html
        // <div className="ToDos">
        //     <h1> Bev's App</h1>
        // </div>
        this.props.todos.map((todo) => (
            //what do we what to display/return for each todo?
            <TodoItem key={todo.id} todo={todo}></TodoItem>
        ))
    );
}
}

//Proptypes
Todos.propTypes = {
    todo: PropTypes.object.isRequired
}

export default Todos;

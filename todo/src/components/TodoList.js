import React from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleComplete } from '../actions';

class TodoList extends React.Component {
    state = {
        newTodo: ''
    };

    handleChange = e => {
        this.setState({ newTodo: e.target.value })
    };

    handleTodoClick = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        // clear input field
        this.setState({ newTodo: '' });
    };

    toggleComplete = (e, index) => {
        e.preventDefault();
        this.props.toggleComplete(index);
    };

    render() {
        return ( 
            <div className="App">
                <div className="todo-list">
                    {this.props.todos.map((todo, index) => 
                        <h4 key={index} onClick={e => this.toggleComplete(e, index)}>{todo.value}{todo.completed && <p>Complete</p>}</h4>
                        )}
                </div>
                <input 
                type="text"
                value={this.state.newTodo}
                onChange={this.handleChange}
                placeholder="Add new todo"
                />
                <button onClick={this.handleTodoClick}>Add Todo</button>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

export default connect(
    mapStateToProps,
    { addTodo, toggleComplete }
)(TodoList);
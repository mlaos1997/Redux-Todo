import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

class TodoList extends React.Component {
    state = {
        newTodo: ''
    }

    handleChange = e => {
        this.setState({ newTodo: e.target.value })
    }

    handleTodoClick = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: '' })
    }

    render() {
        return ( 
            <div className="App">
                <div className="todo-list">
                    {this.props.todos.map((todo, index) => 
                        <h4 key={index}>{todo.value}</h4>
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
        )
    }
};

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(
    mapStateToProps,
    { addTodo }
)(TodoList);
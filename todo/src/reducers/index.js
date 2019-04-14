import { ADD_TODO, TOGGLE_COMPLETE } from '../actions';

const initialState = {
    todos: [
        { value: 'Learn Redux', completed: false },
        { value: 'Walk the dog', completed: false }
    ]
}

const reducer = ( state = initialState, action ) => {
    switch(action.type) {
        case ADD_TODO:
        const newTodo = {
            value: action.payload,
            completed: false
        };
        return {
            ...state,
            todos: [...state.todos, newTodo]
        };
        case TOGGLE_COMPLETE:
        return {
            ...state,
            todos: state.todos.map((todo, index) => 
            action.payload === index
            ? { ...todo, completed: !todo.completed }
            : todo
            )
        }

        default: return state;
    }
}

export default reducer;
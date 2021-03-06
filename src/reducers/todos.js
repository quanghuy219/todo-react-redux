const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
            ...state,
            {
                id: action.id,
                text: action.text,
                completed: false
            }
            ]
        case 'ADD_TODOS':
            return [...state, ...action.todos]

        case "EDIT_TODO": 
            return state.map(todo => (todo.id == action.id) ? {...todo, text: action.text} : todo);
        
        case "DELETE_TODO": 
            return state.filter(todo => todo.id != action.id)
        
        case "CLEAR_COMPLETED":
            return state.filter(todo => !todo.completed)

        case "TOGGLE_ALL":
            return state.map(todo => (!todo.completed) ? {...todo, completed: true} : todo )  
            
        case "UNTOGGLE_ALL":
            return state.map(todo => (todo.completed) ? {...todo, completed: false} : todo)
        
        case 'TOGGLE_TODO':
            return state.map(todo =>
            (todo.id === action.id)
                ? {...todo, completed: !todo.completed}
                : todo
            )
        default:
            return state
    }
}
export default todos;
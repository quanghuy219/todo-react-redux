//Declare types of actions and payload passed to reducer 

let nextTodoId = 0

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
});

export const editTodo = (id, text) => ({
    type: "EDIT_TODO",
    id,
    text
});

export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  id
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

export const toggleAll = () => ({
  type: 'TOGGLE_ALL'
})

export const untoggleAll = () => ({
  type: "UNTOGGLE_ALL"
})

export const clearCompleted = () => ({
  type: "CLEAR_COMPLETED"
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};
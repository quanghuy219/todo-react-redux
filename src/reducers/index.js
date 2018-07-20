import { combineReducers } from 'redux';

// calling the default reducer to create a link
import todos from './todos.js';
import visibilityFilter from './visibilityFilter.js'

const rootReducers = combineReducers({
    // add reducer files references here
    todos,
    visibilityFilter
});

export default rootReducers;
 
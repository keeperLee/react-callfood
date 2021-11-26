import {combineReducers} from 'redux';
import text from './text'
import filter from './filter'
import todos from './todos'
// const todoApp = {
//     text,
//     filter,
//     todos
// }


export default combineReducers({
    todos,
    text,
    filter
});

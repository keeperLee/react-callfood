import {ADD_TODO,TOGGLE_TODO,SET_FILTER,SET_TODO_TEXT} from './actionTypes'

const initialState = {
    filter: 'all',
    text: '',
    todos: []
}

const todoApp = (state = initialState, action) =>{
    switch (action.type){
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id:action.id,
                        text: action.text,
                        completed: false
                    }
                ]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(item => {
                    if(item.id === action.id){
                        return {
                            ...item,
                            completed: !item.completed
                        }
                    }
                })
            }
        case SET_FILTER:
            return {
                ...state,
                filter: {
                    ...action.filter
                }
        }
        case SET_TODO_TEXT:
            return {
                ...state,
                text: action.text
            }
    }
    return state;
}

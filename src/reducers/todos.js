import {ADD_TODO,TOGGLE_TODO} from '../actions/actionTypes'

const todos = (state = [],action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
        case TOGGLE_TODO:
            return [
                ...state,
                state.map(item => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            completed: !item.completed
                        }
                    }
                    return item
                })
            ]
        default:
            return state;
    }
}

export default todos;

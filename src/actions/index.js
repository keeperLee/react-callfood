import {ADD_TODO,TOGGLE_TODO,SET_FILTER,SET_TODO_TEXT} from './actionTypes'
let nextTodoId = 0;

/**
 * 新增待办事项
 */
export const addTodo = (text) =>({
    type: ADD_TODO,
    id: nextTodoId++,
    text
})


/**
 * 更改待办事项状态
 */
export const toggleTodo = id =>({
    type: TOGGLE_TODO,
    id
})


/**
 * 更改过滤状态
 */
export const setFilter = filter => ({
    type: SET_FILTER,
    filter
})

/**
 * 设置新增待办事项的文本
 */
export const setTodoText = text =>({
    type: SET_TODO_TEXT,
    text
})

import React, {Component} from 'react';
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Footer from "./Footer";

// const todos = [
//     {
//         id: 1,
//         text: "学习react",
//         completed: true
//     },
//     {
//         id: 2,
//         text: "学习java",
//         completed: true
//     },
//     {
//         id: 3,
//         text: "学习vue",
//         completed: true
//     }
// ]
// const filter = "all"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            filter: 'all'
        };
        this.nextTodoId = 0;
    }

    render() {
        const todos = this.getVisibleTodos();
        const {filter} = this.props;
        return (
            <div>
                <AddTodo addTodo={this.addTodo}/>
                <TodoList todos={todos} toggleTodo={this.toggleTodo}/>
                <Footer filter={filter} setVisibilityFilter={this.setVisibilityFilter}/>
            </div>
        )
    }

    getVisibleTodos = () => {
        const currentFilter = this.state.filter;
        return this.state.todos.filter(item => {
            if (currentFilter === "active") {
                return !item.completed;
            } else if (currentFilter === "completed") {
                return item.completed;
            } else {
                return true;
            }
        })
    }

    addTodo = text => {
        const todo = {
            id: this.nextTodoId++,
            text,
            completed: false
        };
        const newTodos = [todo, ...this.state.todos];
        this.setState({
            todos: newTodos
        });
    }

    toggleTodo = id => {
        const newTodos = this.state.todos.map(item => {
            return item.id === id ? {...item, completed: !item.completed} : item
        });
        this.setState({
            todos:newTodos
        })
    }

    setVisibilityFilter = filter => {
        this.setState({
            filter
        })
    }
}

export default App

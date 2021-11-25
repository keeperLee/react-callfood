import React, {Component} from 'react';
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Footer from "./Footer";

const todos = [
    {
        id: 1,
        text: "学习react",
        completed: true
    },
    {
        id: 2,
        text: "学习java",
        completed: true
    },
    {
        id: 3,
        text: "学习vue",
        completed: true
    }
]
const filter = "all"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <AddTodo/>
                <TodoList todos={todos}/>
                <Footer filter={filter}/>
            </div>
        )
    }
}

export default App

import React, {Component} from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {completed,text,onClick} = this.props;
        return (
            <li onClick={onClick} style={{
                textDecoration: completed ? "line-through" : "none"
            }}>
                {text}
            </li>
        )
    }
}

export default Todo

import React, {Component} from 'react';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <input/>
                <button>Add</button>
            </div>
        )
    }
}

export default AddTodo

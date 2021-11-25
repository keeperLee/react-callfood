import React, {Component} from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {filter} = this.props;
        return (
            <div>
                <span>Show:</span>
                <button disabled={filter === 'all'}>All</button>
                <button disabled={filter === 'active'}>Active</button>
                <button disabled={filter === 'completed'}>Completed</button>

            </div>
        )
    }
}

export default Footer

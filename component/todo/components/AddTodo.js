import React, {Component, PropTypes} from 'react';
import styles from '../todo.css';

export default class AddTodo extends Component {
    render() {
        console.log('add to do')
        return (
            <div >
                <input type="text" ref="input" className={styles.input}/>
                <button className={styles.button} onClick={(e) => this.handleClick(e)} >+ Add</button>
            </div>
        )
    }
    handleClick(e) {
        const node = this.refs.input;
        const text = node.value.trim()

        this.props.onAddClick(text);
        node.value = '';
    }
}


AddTodo.PropTypes = {
    onAddClick: PropTypes.func.isRequired
}

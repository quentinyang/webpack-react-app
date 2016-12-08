import React, { Component, PropTypes } from 'react'
import styles from '../todo.css';

export default class Todo extends Component {
  render() {
    console.log('todo')
    return (
      <li
        onClick={this.props.onClick}
        className={styles.item}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          cursor: this.props.completed ? 'default' : 'pointer'
        }}>
        {this.props.text}
      </li>
    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}
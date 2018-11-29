import React, { Component } from 'react'
import style from '../containers/App.css';

class TodoForm extends Component {
  state = {
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className={style. FormLabel}>Add a new todo:</label>
          <input type="text" onChange={this.handleChange} value={this.state.text} />
        </form>
      </div>
    )
  }
}

export default TodoForm
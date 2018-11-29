import React, { Component } from 'react';
import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm'
import Title from '../components/Title'
import style from './App.css';

class App extends Component {
  state = {
    todos: [{
      id: 1,
          text: 'clean room'
      }, {
      id: 2,
          text: 'wash the dishes'
      }, {
      id: 3,
          text: 'feed my cat'
      }]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }
  
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className={style. TodoApp}>
        <Title />
        <p className={style. HeaderLabel}>(add things to do or delete them after they are done...)</p>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;

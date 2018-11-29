import React from 'react';
import style from '../containers/App.css';

const TodoList = ({todos, deleteTodo}) => {

  const todoList = todos.length ? (
    todos.map(todo => {
        return (
            <div className={style. Todolist} key={todo.id}>
                <span className={style. ListItem}> {todo.text} </span>
                <span className={style.DeleteItem} onClick={() => {deleteTodo(todo.id)}}> x </span>
            </div>
        )
    })
    ) : (
        <p>You have no todo's left!</p>
    )
    return (
        <div>
            {todoList}
        </div>
    )
}

export default TodoList;
import React from 'react';
import { Form, Button } from 'react-bootstrap';

const ToDo = ({todo, index, handleToggle, markTodo, removeTodo}) => {
    //get what a user click
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id) //get the index of items
    }

    //itself. no need to using <toDo></toDo>
    return (
        <div className="todo">
        <Form>
            <Form.Check onClick={() => markTodo(index)}></Form.Check>{' '}
        </Form>
        <span
            style={{ textDecoration: todo.complete ? "line-through" : "" }}
            id={todo.id} 
            key={todo.id} 
            name="todo" 
            value={todo.id} 
            onClick={handleClick}>
                {todo.task}
        </span>
        <div>
            <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
            <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
        </div>
        </div>
    );
};
 
export default ToDo;

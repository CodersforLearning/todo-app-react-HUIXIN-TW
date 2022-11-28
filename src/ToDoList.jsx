import React from 'react';

//import all todo items
import ToDo from './ToDo';
 
const ToDoList = ({toDoList, handleToggle, handleFilter, markTodo, removeTodo}) => {
    return (
        <div>
            {toDoList.map((todo, index) => {
                return (
                    <ToDo 
                    key={index} 
                    index={index} 
                    todo={todo} 
                    handleToggle={handleToggle} 
                    handleFilter={handleFilter} 
                    markTodo={markTodo}
                    removeTodo={removeTodo}/>
                )})}
            <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    );
 };
 
export default ToDoList;
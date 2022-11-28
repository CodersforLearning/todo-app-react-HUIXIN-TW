import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value) //get the input value
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userInput) return;
        addTask(userInput); //call addTask function in App,jsx
        setUserInput(""); //clear the input box
    }
    return (
        <div style={{margin: '5px'}}>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Control 
                        value={userInput} 
                        type="text" 
                        className="input" 
                        onChange={handleChange} 
                        placeholder="Enter task..."/>
                    </Form>
                </Col>
                <Col>
                    <Button variant="primary" size="m" type="submit">Add Task</Button>
                </Col>
            </Row>
        </div>
    );
};

export default ToDoForm;
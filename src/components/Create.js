import React , {useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import {NotificationManager} from 'react-notifications';

export default function Create ()  {

    let history = useHistory()
    let tasks=[{id:1,task:'hello world'}];
    const [task, setTask] = useState('hi');
    const [message,setMessage] = useState(false); 
    if(localStorage.getItem('tasks')){
        tasks = JSON.parse(localStorage.getItem('tasks'));
    
    }
   
    const handleFormSubmit = evt => {
        console.log('saving data')
        const data = [...tasks, {
            id: Math.floor(Math.random() * 1000),
            task:task,
        } ]
        localStorage.setItem('tasks',JSON.stringify(data)); 
        NotificationManager.success('Success', 'Created New Task');
        history.push('/')
    }

    return(
        <div className="col-sm-8">
           <Card>
               <Card.Header>
                   <Card.Title>Create New Tasks</Card.Title>
               </Card.Header>
               <Card.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Task:</Form.Label>
                                <Form.Control type="text"
                                 placeholder="Enter new task" 
                                 onChange={e => setTask(e.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleFormSubmit} >
                            Add New Task
                        </Button>
                  </Form>
               </Card.Body>
               {message?
                <Alert variant="success" dismissible>Create a new Todo item!</Alert>
                : ""
               }
           </Card>
        </div>
    )
}
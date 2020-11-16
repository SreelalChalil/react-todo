import React , {useState,useEffect} from 'react'
import {ListGroup, Button, Card} from 'react-bootstrap'
import {NotificationManager} from 'react-notifications';
import { LinkContainer } from "react-router-bootstrap";

export default function Home ()  {

    const [task, setTask] = useState([]);
    useEffect (() => {
        if(localStorage.getItem('tasks')){
            setTask(JSON.parse(localStorage.getItem('tasks')));
            console.log(task)
        }
    },[]);

    function deleteTask(id) {
        console.log(id)
        console.log('deleting')
        const updatedTask = task.filter(item => item.id !== id); 
        localStorage.setItem('tasks',JSON.stringify(updatedTask))
        NotificationManager.success('Success', 'Deleted a Task');
        setTask(updatedTask)
        console.log(updatedTask)
        
   }
    return(
        <div className="col-sm-8">
           <Card>
               <Card.Header>
                   <Card.Title>My Tasks</Card.Title>
               </Card.Header>
               <Card.Body>
                   {task.length!=0?
                    <ListGroup>
                        {task.map((todo) => 
                            <ListGroup.Item key={todo.id}>
                                <div className="row">
                                    <div className="col-sm-6">
                                    {todo.task}
                                    </div>
                                    <div className="col-sm-6 float-right">
                                    <LinkContainer to={`/edit/${todo.id}`}>
                                        <Button variant="primary">Edit</Button>
                                    </LinkContainer>
                                    <Button className="ml-1" variant="danger" onClick = { () => {if(window.confirm('Are you sure to Delete the item?')) { deleteTask(todo.id)}} }>Delete</Button>
                                    </div>
                                </div>
                            </ListGroup.Item>
                           
                        )}
                    </ListGroup>
                    :
                    <p>No Tasks Exist</p>
                    }
               </Card.Body>
           </Card>
        </div>
    )
}
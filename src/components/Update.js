import React , {useEffect, useState} from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import {NotificationManager} from 'react-notifications';

export default function Update (props)  {
    const id = props.match.params.id;
    console.log('id',id)
    let history = useHistory()
    let tasks=[{id:1,task:'hello world'}];
    const [name, setName] = useState('hi');
    
    useEffect(() => {
        if(localStorage.getItem('tasks')){
            tasks =  JSON.parse(localStorage.getItem('tasks'))
            const i = tasks.find(el => el.id == Number(id));
            console.log(i)
            setName(i.task)
        }
    },[])
   
     
    const handleFormSubmit = evt => {
        console.log('saving data')
        tasks =  JSON.parse(localStorage.getItem('tasks'))
        const items = [...tasks];
        const index= tasks.findIndex(el => el.id == Number(id));
        console.log(index)
        items[index].task=name;
        localStorage.setItem('tasks',JSON.stringify(items)); 
        NotificationManager.success('Success', 'Updated Task');
        history.push('/')
    }

    return(
        <div className="col-sm-8">
           <Card>
               <Card.Header>
                   <Card.Title>Update Task</Card.Title>
               </Card.Header>
               <Card.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Task:</Form.Label>
                                <Form.Control type="text"
                                 value={name}
                                 onChange={e => setName(e.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={() => {handleFormSubmit()} }>
                            Update Task
                        </Button>
                  </Form>
               </Card.Body>
           </Card>
        </div>
    )
}
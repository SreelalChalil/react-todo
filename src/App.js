import React from 'react'
import {Navbar,Button} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import './App.css';

function App({children}) {
  return (

    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">Todo App</Navbar.Brand>
        <div className="ml-5 float-right">
		<LinkContainer to="/new">
            <Button variant="outline-light" >+ NEW TASK</Button>
		</LinkContainer>
        </div>
      </Navbar>
	  <NotificationContainer /> 
      <div className="main">
        {children}
      </div>
      
    </div>
  );
}

export default App;

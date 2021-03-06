import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import * as emailjs from 'emailjs-com';


const emailMap = {
  '#link1': 'samuel@yahoo.com',
  '#link2': 'katherinej@gmail.com',
  '#link3': 'derekb@gmail.com',
};

export default class SendMail extends Component
{
   constructor(props){
        super(props);
        this.state={
            email:'',
            message:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleEmail = e => {
      this.setState({ email : e.target.value})
    }

    handleMessage = e => {
      this.setState({ message : e.target.value})
    }

    handleSubmit = (event) => {

      console.log("Hello");
      event.preventDefault();
      const {email, message} = this.state;

      let params = {
        email: this.state.email,
        message: this.state.message
      }

      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
      };

      const form =  axios.post('/api/form',params,axiosConfig).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      console.log(params);

      this.resetForm();
    };



    /*handleSubmit(event) 
    {
        console.log(this.state.email);
        console.log(this.state.message);

        event.preventDefault();

        alert('Mail sent successfully');

        
    let templateParams = {
      from_name: this.state.email,
      to_name: "shubhankargupta@gmail.com",
      subject: "Hello",
      message_html: this.state.message,
     }
     emailjs.send(
      'gmail',
      'template_6xORTsAZ',
       templateParams,
      'user_1eQPnKbW6xEv8P5xLJC4K'
     )*/

     /*Email.send({
    Host : "smtp.yourisp.com",
    Username : "shubhankargupta@hotmail.com",
    Password : "Shalini@12345",
    To : this.state.email,
    From : "shubhankargupta@hotmail.com",
    Subject : "Sample subject",
    Body : this.state.message
}).then(
  message => alert(message)
);*/

    
 

    resetForm() {
    this.setState({
      email: '',
      message: ''
    })
  }



	render(){
	return (
    <div>

     <Alert variant="success">
  <p>Hey, would you like to ask one of these supporters to help you out with goals?</p>
  </Alert>
    
    <br/>
    <br/>
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
  <Row>
    <Col sm={4}>
      <ListGroup onSelect={eventKey => {
        this.setState((state) => {
          return { email: emailMap[eventKey] };
        });
      }}>
        <ListGroup.Item action href="#link1">
          Samuel Lionel <Badge variant="success">5</Badge>
        </ListGroup.Item>
        <ListGroup.Item action href="#link2">
          Katherine Jones  <Badge variant="success">4.5</Badge>
        </ListGroup.Item>
      <ListGroup.Item action href="#link3">
          Derek Beth  <Badge variant="success">4</Badge>
        </ListGroup.Item>
      </ListGroup>
    </Col>
    <Col sm={8}>
      <Tab.Content > 
        <Tab.Pane eventKey="#link1">
          <h3> samuel@yahoo.com </h3>
        </Tab.Pane>
        <Tab.Pane eventKey="#link2">
          <h3> katherinej@gmail.com </h3>
        </Tab.Pane>
        <Tab.Pane eventKey="#link3">
          <h3> derekb@gmail.com </h3>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container> 
<br/>
<br/>		
    <Form onSubmit={this.handleSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" value={this.state.email} onChange = {this.handleEmail} placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" value={this.state.message} placeholder="Hi, Could you help out with my goals? Go to the url (http://localhost:3000/) to access my profile." onChange = {this.handleMessage} rows="3"/>
  </Form.Group>
  <Button type="submit">Submit </Button>
    </Form>
    
    </div>
  );
}

}



/*
<Button variant="primary" type="submit" onClick={(event) => this.handleSubmit(event)}>
    Send
  </Button>
*/
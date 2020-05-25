import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const Nodo = props => (

    <tr>
        <td>{props.nodo.todo_description}</td>
        <td>{props.nodo.todo_responsible}</td>
        <td>{props.nodo.todo_priority}</td>
        <td>{props.nodo.todo_completed ? "Done" : "In Progress"}</td>
        <td>
            <Link to={"/nodo/edit/"+props.nodo._id}><Button variant="primary">Edit</Button>{' '}</Link>                                
        </td>
        <td>
            <Button variant="danger" onClick={deletePlayer.bind(this,props)} > Delete </Button>
        </td>
    </tr>
)




function deletePlayer(props)
{
    console.log('Hello, This is Shubhankar');
    axios.delete(`http://localhost:4000/todos/nodo/delete/${props.nodo._id}`)
    .then(res => res.data)

    setTimeout(window.helloComponent.componentDidMount(),2000);
    
}


export default class NodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {nodos: [],
                      showLabel : true,
                      label: 'Days until to reset goals: 5'};
        window.helloComponent = this;
        this.myFunction = this.myFunction.bind(this);
    }

    myFunction(){
    var sLb = ! (this.state.showlabel);
    this.setState({showlabel: sLb});
  }

    componentDidUpdate() {
     setTimeout(this.myFunction, 4000)
  }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/nodo')
            .then(response => {
                this.setState({ nodos: response.data });
            })
            .catch(function (error){
                console.log(error);
            })

                setTimeout(this.myFunction, 2000)

    }

    nodoList() {
        return this.state.nodos.map(function(currentNodo, i){
            return <Nodo nodo={currentNodo} key={i} />;
        })
    }

   

    render() {
        return (
            <div>
              <div>
              <Alert variant="success">
  <Alert.Heading>
     Add/Update daily goals for David?
  </Alert.Heading>
  <hr />
  </Alert>
              
              </div>
                <table className="table table-hover" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Activity</th>
                            <th>Target/Day</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.nodoList() }
                    </tbody>
                </table>
  

            <br/>
            

            <div class="left-btn">
             <Link to="/nodo-data"><Button variant="primary">View David's Data</Button>{' '}</Link>
           </div>
            

           <div class="right-btn">
             <Link to="/nodo-create"><Button variant="primary">Add Activity</Button>{' '}</Link>
           </div>


           <br/>
           <br/>

           <h6><strong>Last Updated: Mon, 25 May 2020 08:00:00 PST by Shubhankar </strong></h6>
                  



            </div>
        )
    }
}
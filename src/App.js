import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LineGraph from "./components/line-graph.component";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import SendMail from  "./components/send-mail.component";
import logo from "./wellbeing.png";
class App extends Component {
  render() {
    return (
      <Router> 
       <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://www.fitbit.com/us/home" target="_blank">
              <img src={logo} width="100" height="100" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">My Info</Link>                                                                         
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/show" className="nav-link"><b>Todos</b></Link>
                </li>
              </ul>
            </div>
          </nav> 

          <br/>
          <Route path="/" exact component={LineGraph} />
          <Route path="/show" component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/email" component={SendMail} />
        </div> 
      </Router>
    );
  }
}
export default App;


/*
<li className="navbar-item">
                  <Link to="/email" className="nav-link"><b>Share Data</b></Link>
                </li>
<li className="navbar-item">
                  <Link to="/create" className="nav-link">Create To-do</Link>
                </li>
*/
import React, { Component } from 'react';
import './App.css';
import {
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import Form from "./Form";
import List from "./List";
import Songs from "./Songs";
import axios from 'axios';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={List}/>
          <Route path="/form" component={Form}/>
          <Route path="/album/:albumId" component={Songs}/>
        </Switch>
        <br/>
        <div>
          <NavLink to={"/form"}>New Album</NavLink>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import axios from 'axios'

class Button extends Component {

  constructor() {
    super()
    this.state = {
      listAlbums: []
    }
  }

  componentDidMount() {
    console.log("hello");
    axios.get("http://localhost:8000/api/albums")
        .then(response => {
            console.dir(response);
            this.setState({
                listAlbums: response.data
            });

            return response;
        })
  }

  render() {
    return (
      <NavLink to="/form">Vers le form</NavLink>
    );
  }
}

export default Button;

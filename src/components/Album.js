import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class Album extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div className="album">
        <span>{this.props.title} </span>    
        <span> {this.props.img} </span>
        <span> {this.props.artist} </span> 
        <NavLink to={`/songs/${this.props.id}`}>Plus d'informations </NavLink>
      </div>
    );
  }
}

export default Album;

import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Album extends Component {

  render() {
    return (
      <React.Fragment>
        <span>{this.props.title} </span>    
        <span> {this.props.img} </span>
        <span> {this.props.artist} </span> <br/>
        <NavLink to={`/album/${this.props.id}`}>Plus d'informations </NavLink>
      </React.Fragment>
    );
  }
}

export default Album;

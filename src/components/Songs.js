import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';

class Song extends Component {

  constructor() {
    super()
    this.state = {
      albumData: []
    }
  }

  componentDidMount() {

    axios.get("http://localhost:8000/api/albums/"+this.props.match.params.albumId+"")
      .then(response => {
        this.setState({
            albumData: response.data
        });
      })
  }

  render() {
    return (
      <div>
        <ul className="song">
          <li>{this.state.albumData.title}</li>
          <li>{this.state.albumData.artist}</li>
          <li>{this.state.albumData.id}</li>
          <li>{this.state.albumData.img}</li>
          <li>{this.state.albumData.year}</li>
          <li>{this.state.songs ? this.state.songs.map((t) => 
            <li>t.title</li>): ""};
          </li>
        </ul>
      <NavLink to="/">Retour</NavLink>
      </div>
    );
  }
}

export default Song;

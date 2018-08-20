import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Album from "./Album";
import axios from 'axios';


class List extends Component {

  constructor(props) {
    super(props)
    this.state = {
      listAlbums: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:8000/api/albums")
      .then(response => {
          this.setState({
            listAlbums: response.data
          });

          return response;
      })
  }

  render() {
    return (
      this.state.listAlbums.map((album) =>
        <li>
          <Album 
            key={album.id}
            id={album.id} 
            title={album.title}
            artist={album.artist}
            img={album.img}
            year={album.year}
          />
        </li>
    ));
  }
}

export default List;

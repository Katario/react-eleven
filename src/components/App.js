import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Album from "./Album";
import Form from "./Form";
import Songs from "./Songs";
import Button from "./Button";
import axios from 'axios';


class App extends Component {

  constructor() {
    super()
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
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Header</h1>
          </header>
          <Route exact path="/" render={() => this.state.listAlbums.map((album) =>
            <li><Album 
              id={album.id} 
              title={album.title}
              artist={album.artist}
              img={album.img}
              year={album.year}
              /></li>
          )}/>

          <Route path="/form" component={Form}/>
          <Route path="/album/:albumId" component={Songs}/>

          <div>
            <NavLink to={"/form"}>New Album</NavLink>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;

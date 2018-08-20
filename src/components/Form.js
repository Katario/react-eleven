import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      artist: '',
      img: '',
      year: 2000
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  handleSubmit(event) {
    axios.post('http://localhost:8000/api/albums', {
      title: this.state.title,
      artist: this.state.artist,
      img: this.state.img,
      year: this.state.year,
    }).then(function(response) {
      console.log(response);
    });
  }

  render() {
    return (
      <div className="form">
        Form
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title: 
              <input type="text" id="title" value={this.state.title} onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label>Artist: 
              <input type="text" id="artist" value={this.state.artist} onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label>Image Name: 
              <input type="text" id="img" value={this.state.img} onChange={this.handleChange} />
            </label>
            </div>
          <div>
            <label>Year of Release: 
              <input type="number" id="year" value={this.state.year} onChange={this.handleChange} />
            </label>
          </div>

          <input type="submit" value="Créer" />
        </form>
        <NavLink to="/">Retour</NavLink>
      </div>
    );
  }
}

export default Form;

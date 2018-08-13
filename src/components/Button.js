import React, { Component } from 'react';
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
      <div className="heyhey">
        <input type="button" value="hello"/>
      </div>
    );
  }
}

export default Button;

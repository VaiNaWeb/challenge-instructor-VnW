import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import logoFacebook from '././assets/facebook.jpg';
import logoTwitter from '././assets/twitter.png'

const api = axios.create({
  baseURL: "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=679946a804e34ab2bedc6e68a1ffd9be"
});

class App extends Component {
  state = {
    listMovie: []
  }

  async componentDidMount() {
    const response = await api.get();

    this.setState({
      listMovie: response.data.articles
    });
    console.log(response.data.articles)
  }

  main = () => {
    const { listMovie } = this.state

    return(
      <div>
        <div>
          {listMovie.map((item, index) => (
            <div key={index}>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    )
  } 

  render() {
    return(
      <div>
        <div  className="header">
          <div className="box-button-header">
            <button className="button-header">
              <img src={logoFacebook} className="logo-facebook"/>
              <p className="name-button-header">CURTIR</p>
            </button>
            <button className="button-header">
            <img src={logoTwitter} className="logo-twitter"/>
              <p className="name-button-header-1">SEGUIR</p>
            </button>
          </div>
        </div>
        {this.main()}
      </div>
    );
  }
}

export default App;

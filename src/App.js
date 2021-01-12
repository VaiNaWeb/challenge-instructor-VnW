import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import logoFacebook from '././assets/facebook.jpg';
import logoTwitter from '././assets/twitter.png';
import logoTudum from '././assets/logo.jpeg';
import logoTudum2 from '././assets/logo2.jpeg';
import commit from '././assets/comentario.png';

const api = axios.create({
  baseURL: "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=679946a804e34ab2bedc6e68a1ffd9be"
});

class App extends Component {
  state = {
    listMovie: [],
  }  

handleChange = (scroll) => {
    document.documentElement.scrollTop = 0;
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
        <h2 className="title-news">THE NEWS</h2>
        <div className="box-main">
          {listMovie.map((item, index) => (
            <div key={index} className="box-news">
              <img src={item.urlToImage} className="image-main" />
              <div className="box-text-news">
                <p className="text">{item.title}</p>
              </div>
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
          <div className="box-logo-tudum">
            <img src={logoTudum} className="logo-tudum"/>
          </div>
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
        <div>
          <button className="button-footer" onClick={this.handleChange}>
           <p className="text-button-footer"> VOLTAR AO TOPO ↑ </p>
          </button>
          <div className="footer">
            <div className="box-footer">
              <img src={logoTudum2} className="logo-footer" />
              <p className="paragraph-footer">
                Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Quem manda na minha terra sou euzis! Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.
              </p>
              <button className="button-footer-1">
                <img src={commit} className="figure-commit" />
              </button>
              <button className="button-footer-1">
                
              </button>
              <button className="button-footer-2">
                Telas (1)
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

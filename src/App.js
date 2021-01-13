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
        <div className="box-main">
          {listMovie.slice(0,1).map((item, index) => (
            <div key={index} className="box-news-main">
              <img src={item.urlToImage} className="image-news-main" />
              <div className="box-text-news">
                <h3 className="title-news-main">THE NEWS</h3>
                <p className="text-news-main">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <h2 className="title-news">THE NEWS</h2>
        <div className="box-main">
          {listMovie.slice(0,3).map((item, index) => (
            <div key={index} className="box-news">
              <img src={item.urlToImage} className="image-main" />
              <div className="box-text-news">
                <p className="text">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
          <h2 className="title-news-2">THE NEWS</h2>
        <div className="box-main">
          {listMovie.slice(4,10).map((item, index) => (
            <div key={index} className="box-news-2">
              <img src={item.urlToImage} className="image-main-part-2" />
              <div className="box-text-news">
                <p className="text-author">{item.author}</p>
                <p className="text-part-2">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  } 

  finish = () => {
    const { listMovie } = this.state

    return(
      <div className="box-finish-main">
        <div className="box-footer-finish">
        <h2 className="title-footer">The News is here</h2>
        {listMovie.slice(1,6).map((item, index) => (
          <div key={index} className="box-finish">
            <p className="text-footer">{item.description}</p>
            <div className="division-footer"></div>
          </div>
        ))}
        </div>
        <div className="box-footer-finish-2">
        <h2 className="title-footer-2">News</h2>
        {listMovie.slice(7,9).map((item, index) => (
          <div key={index} className="box-finish-2">
            <img src={item.urlToImage} className="image-footer-finish" />
            <div className="text-finish">
              <p className="author-finish">{item.author}</p>
              <p className="description-finish">{item.description}</p>
            </div>
          </div>
        ))}
        </div>
        <div className="box-footer-finish-3">
        <h2 className="title-footer-2">News</h2>
        {listMovie.slice(9,11).map((item, index) => (
          <div key={index} className="box-finish-2">
            <img src={item.urlToImage} className="image-footer-finish" />
            <div className="text-finish">
              <p className="author-finish">{item.author}</p>
              <p className="description-finish">{item.description}</p>
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
        <div className="header">
          <div className="box-logo-tudum">
          <span id="menu-hamburguer">&#9776;</span>
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
          <div className="division"></div>
            {this.finish()}
            <button className="button-footer" onClick={this.handleChange}>
            <p className="text-button-footer"> VOLTAR AO TOPO ↑ </p>
            </button>
          <div className="footer">
            <div className="box-footer">
              <img src={logoTudum2} className="logo-footer" />
              <p className="paragraph-footer">
                Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Quem manda na minha terra sou euzis! Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.
              </p>
              <div className="buttons-footer">
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
      </div>
    );
  }
}

export default App;

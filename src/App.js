import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Logo from './assets/img/bbc.png'
import Face from './assets/img/facebook.png'
import Twitter from './assets/img/Twitter.png'
import Tudum from './assets/img/tudum.png'
import Quiz from './assets/img/quiz.jpg'

const apiNews = axios.create({
  baseURL: "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=df831af7bbd9429aa11f04376e696e6b"
});


class App extends Component{
  render() {
    return(
      <section className="container">
        <div className="container_header">
          <div className="box_image_header">
            <img className="image_logo" src={Logo} alt="Logo Tudum"/> 
          </div>
          <div className="box_btn_header">
            <button className="btn">
              <img  className="img_btn" src={Face} alt="" />
              <p className="text_btn">CURTIR</p>
            </button>
            <button className="btn">
              <img className="img_btn" src={Twitter} alt="" />
              <p className="text_btn">SEGUIR</p>
            </button>
          </div>
        </div>  
      </section>      
    );
  }
}

export default App;

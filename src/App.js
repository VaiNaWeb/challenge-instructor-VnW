import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Logo from './assets/img/bbc.png'
import Face from './assets/img/facebook.png'
import Twitter from './assets/img/Twitter.png'
import Tudum from './assets/img/tudum.png'
import Quiz from './assets/img/quiz.jpg'
import Image from './assets/img/image.jpg'


const apiNews = axios.create({
  baseURL: "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=df831af7bbd9429aa11f04376e696e6b"
});


class App extends Component{

  state = {
    newList: []
  }

async componentDidMount() {
  const response = await apiNews.get();
  console.log(response.data.articles)

  this.setState({
    newList: response.data.articles
  });
}

renderMain = () => {
  return(
    <section className="container_main">
          <div className="wrap_main">
            <div className="box_img_main">
              <img className="image_main" src={Image} alt="" />
            </div>
            <div className="box_title">
              <h2 className="title_main">BBC NEWS</h2>
              <p className="text_main"></p>
            </div>
          </div>
        <h2 className="title">BBC NEWS</h2>
        <div className="wrap_news">
          {this.state.newList.slice(0,3).map((item, index) => (
          <div key={index} className="box_image">
            <img className="image_news" src={item.urlToImage} alt="" />
          </div>
          ))}
        </div>
        <h2 className="title">BBC NEWS</h2>
        <div className="wrap">
          {this.state.newList.slice(3,9).map((item, index) => (
          <div key={index} className="box_news">
            <div className="box_image">
              <img className="image_news" src={item.urlToImage} alt="" />
            </div>
            <div className="box_description">
              <p className="title_news">{item.title}</p>
              <p className="paragrafo">{item.description}</p>
            </div>
          </div>
          ))}
        </div>     
        <section className="container_end_main">
          <div className="box_texts">
            <p className="texts1">Assererrê a errê petuberê petê</p>
            <p className="texts2">Se pirulita daquisis</p>
          </div>
          <div className="end_main">
            <div className="wrap_end_main">
              {this.state.newList.slice(0,5).map((item, index) => (
              <div key={index} className="box_titles_news">
                <p className="title_main_news">{item.title}</p>
              </div>
              ))}
            </div>
            <div className="wrap_end_main_two">
              <div className="box_end_main">
                <img className="image" src={Tudum} alt="" />
                <div className="box_paragrafo_end_main">
                  <p className="paragrafo_end_main1">VERDADIS</p>
                  <p className="paragrafo_end_main">Quem manda na minha terra sou euzis!</p>
                </div>
              </div>
              <div className="box_end_main">
                <img className="image"  src={Quiz} alt="" />
                <div className="box_paragrafo_end_main">
                  <p className="paragrafo_end_main1">VERDADIS</p>
                  <p className="paragrafo_end_main">Quem manda na minha terra sou euzis!</p>
                </div>
              </div>
            </div>     
          </div>
        </section>
    </section>
  );
};

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
        {this.renderMain()}
      </section>      
    );
  }
}

export default App;

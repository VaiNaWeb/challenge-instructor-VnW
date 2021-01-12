import React, { Component } from 'react';
import axios from 'axios';
import Logo from './Assets/logo.png';
import Facebook from './Assets/facebook-icon.png';
import Twitter from './Assets/twitter-icon.png';
import Background from './Assets/background.png';
import Imagem1 from './Assets/imagem1.jpg';
import Imagem2 from './Assets/imagem2.jpg';
import './App.css';


 
const api = axios.create({
  baseURL: "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7a716289b1864b9b9efd5cc48c6ebbaa"
})

class Tudum extends Component {
  state = {
    titles: [],
    images: []
  }

  async componentDidMount(){
    const response = await api.get()
    
    // const result = titles.filter(title => title.length > 6);
    // console.log(result)
    
    this.setState({
      titles: response.data.articles
    })
    console.log(response.data.articles);


    this.setState({
      images: response.data.articles.urlToImage
    });
  }





  render(){
    return(
      <div className="hub">
        <header>
          <div className="span-lg"><img className="logo" src={Logo} alt="Logo Tudum"></img></div>
          <span className="social">
            <a className="social-botom" href="#"><img className="social-icons" src={Facebook} alt="Icone Facebook"/>Curtir</a>
            <a className="social-botom" href="#"><img className="social-icons" src={Twitter} alt="Icone Twitter"/>Seguir</a>
          </span>
        </header>

        <div className="background-image">
          <div className="position">
            <span className="title-class">
              <h1 className="title">The Good Place</h1>
            </span>
            <span className="description-class"> 
              <p className="description">Praesent malesuada urna nisi, quis volutpat erat hendrerit non.</p>
            </span>
          </div>
          <img className="back-img" src={Background} alt="Fundo TI"/>
        </div>




        <div className="news-box">
        <span className="titleinbox">
          <h1 className="titlein">The Good Place</h1>
        </span>
          {this.state.titles.map((item, index) => (
            <div className="class-news" key={index}>
              <img className="imagens-news" src={item.urlToImage}/>
              <p className="titles-news"><a href={item.url}>{item.author}</a></p>
              <p className="description-news">{item.description}</p>
            </div>
          ))}
          <span className="line-separation1"></span>
        </div>





        <div className="content-boxExtras">
          <div className="extras-box">
            <h1 className="h1-extras">Assererrê a errê errê petuberê petê</h1>
            <span className="span-extras-d">
              <p className="texts-extras_">Quem manda na minha terra sou euzis! Eu conheço 
              uma cachacis que pode alegrar sua vidis.</p>
            </span>

            <span className="span-extras-d">
              <p className="texts-extras">Quem manda na minha terra sou euzis! Eu conheço 
              uma cachacis que pode alegrar sua vidis.</p>
            </span>

            <span className="span-extras-d">
              <p className="texts-extras">Quem manda na minha terra sou euzis! Eu conheço 
              uma cachacis que pode alegrar sua vidis.</p>
            </span>

            <span className="span-extras-d">
              <p className="texts-extras">Quem manda na minha terra sou euzis! Eu conheço 
              uma cachacis que pode alegrar sua vidis.</p>
            </span>

            <span className="span-extras-d">
              <p className="texts-extras">Quem manda na minha terra sou euzis! Eu conheço 
              uma cachacis que pode alegrar sua vidis.</p>
            </span>
          </div>


          <div className="extras-box-top">
            <h1 className="h1-extras-top">Se pirulita daquisis</h1>
            <span className="span-images-extras">
              <img className="images-extras" src={Imagem1} />
              <img className="images-extras" src={Imagem2} />
            </span>

            <span className="span-texts-extras">
              <p className="h1-verdadis">Verdadis</p>
              <p className="p-euzis">Quem manda na minha terra sou euzis!</p>
              <p className="h1-verdadis">Verdadis</p>
              <p className="p-euzis">Quem manda na minha terra sou euzis!</p>
            </span>

            <span>
              
            </span>
          </div>
        </div>



      </div>
    )
  }
}



export default Tudum;

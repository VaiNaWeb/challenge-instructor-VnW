import React, { Component } from 'react';
import axios from 'axios';
import Logo from './Assets/logo.png';
import Facebook from './Assets/facebook-icon.png';
import Twitter from './Assets/twitter-icon.png';
import Background from './Assets/background.png'
import './App.css';


 
const api = axios.create({
  baseURL: "http://newsapi.org/v2/everything?q=apple&from=2021-01-10&to=2021-01-10&sortBy=popularity&apiKey=7a716289b1864b9b9efd5cc48c6ebbaa"
})

class Tudum extends Component {
  state = {
    titles: [],
    images: []
  }

  async componentDidMount(){
    const response = await api.get()
    
    
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




        {/* <div>
          {this.state.titles.map((item, index) => (
            <div className="" key={index}>
              <img className="" src={item.urlToImage}/>
              <p className="">{item.title}</p>
            </div>
          ))}
        </div> */}
      </div>
    )
  }
}



export default Tudum;


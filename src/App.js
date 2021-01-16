
import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import title from './title.jpeg';
import logoFooter from './img-footer.jpeg';
import logoFace from './logof.png';
import logoTwitter from './logo-twitter.png'


const api = axios.create({
  baseURL:"http://newsapi.org/v2/everything?q=bitcoin&from=2020-12-15&sortBy=publishedAt&apiKey=719dc29ce5444befa2dd48895e99d30a"
})

class App extends Component{

  state={
    news: []

  }

  async componentDidMount() {
    const response = await api.get();
    console.log(response.data.articles)
    
    this.setState({
      news: response.data.articles

    });
    
   
  };

  render(){
    return(
      <div>
        <header id="header" className="box-menu">
          <img className="img-title" src={title} alt= ""/>          
          <button className="button-curtir">
            <img className="logo-facebook" src={logoFace} alt= ""/>
            <p>curtir</p>            
          </button>
          <button className="button-seguir">
            <img className="logo-twitter" src={logoTwitter} alt= ""/>
            <p>seguir</p>
          </button>          
        </header>
        <div className="box-map1">
          {this.state.news.slice(0,1).map((item, index) => (
            <div className="box-return-map" key={index}>              
              <img className="primeira-img-news" src={item.urlToImage} alt="" />
              <div className="box-descricao">
                <h2 className="title1">THE GOOD PLACE</h2>            
                <p className="description">{item.description}</p>
              </div>
                         
            </div>
          ))}
        </div>
        <h2 className="title2">THE GOOD PLACE</h2>
        <div className="box-map2">
            {this.state.news.slice(1,4).map((item, index) => (
            <div className="box-return-map2" key={index}>
              <img className="img-news2" src={item.urlToImage} alt="" />              
              <p className="title-img">{item.title}</p>                         
            </div>
          ))}
        </div>
        <h2 className="title3">THE GOOD PLACE</h2>
        <div className="box-map3">          
          {this.state.news.slice(4,10).map((item, index) => (
            <div className="box-return-map3" key={index}>
              <img className="img-news-meio3" src={item.urlToImage} alt="" />        
              <p className="title-img3">{item.title}</p>
              <p className="descricao-3">{item.description}</p>                        
            </div>
          ))}
        </div>
        <div className="box-final">
          <div className="box-map4">
            <h2 className="title4">THE GOOD PLACE</h2>
            {this.state.news.slice(10,16).map((item, index) => (
              <div className="box-return-map" key={index}>
                <div className="box-descricao4">
                  <p className="descricao4">{item.description}</p>
                  <div className="linha"></div>
                </div>                         
              </div>
            ))}
          </div>
          <div className="box-map5">
            <h2 className="title5">THE GOOD PLACE</h2>
            {this.state.news.slice(16,18).map((item, index) => (
              <div className="box-return-map5" key={index}>
                <img className="img-news-meio5" src={item.urlToImage} alt="" />              
                <div className="box-descricao5">
                  <p className="title-5">{item.title}</p>
                  <p className="descricao5">{item.description}</p>
                </div>                         
              </div>
            ))}
          </div>
        </div>
        <a href="#header">
          <p className="volta-topo">VOLTAR AO TOPO</p>
          </a>
        <footer>
          <div className="box-footer">
            <img className="logo-footer" src={logoFooter} alt= ""/>  
            <div className="buttons">
              <button className="botao-redondo"></button>
              <button className="botao-redondo"></button>
              <button className="botao-oval"></button>
            </div>
          </div>      
        </footer>

      </div>
       
    )
  }
}

export default App;

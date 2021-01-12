
import React, { Component } from 'react'
import axios from 'axios';
import './App.css'

const api = axios.create({
  baseURL: "http://newsapi.org/v2/everything?q=bitcoin&from=2020-12-12&sortBy=publishedAt&apiKey=719dc29ce5444befa2dd48895e99d30a"
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
  }







  render(){
    return(
      <div>
        
        <header className="menu">
          <h1>Tudum</h1>
          <button>Facebook</button>
          <button>twitter</button>
        </header>
        <div className="box-map">
          {this.state.news.map((item, index) => (
            <div className="box-return-map" key={index}>
              <h2>{item.author}</h2>
              <p>{item.title}</p>
              <img url={item.urlToImage} alt=""/>
            </div>
        ))}

        </div>
      </div>
      
       
    )
  }
}

export default App;

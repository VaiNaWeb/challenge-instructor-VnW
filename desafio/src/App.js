import React, { Component } from 'react';
import axios from 'axios';
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


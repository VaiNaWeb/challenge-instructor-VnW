import React, { Component } from "react";
import "./App.css";
import axios from "axios";

const api = axios.create({
  baseURL:
    "http://newsapi.org/v2/everything?q=bitcoin&from=2020-12-15&sortBy=publishedAt&apiKey=e5a97c9ead0c44e5a64591f90ce57344"
});

class News extends Component {
  state = {
    listNews: []
  };

  async componentDidMount() {
    const response = await api.get();
    console.log(response);

    this.setState({
      listNews: response.data.articles
    });
  }

  render() {
    return (
      <div>
        {this.state.listNews.map((item) => (
          <div>
            <h2>{item.author}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default News;

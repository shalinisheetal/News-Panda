import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=21a14d027e7f4247a13b4f8780344152";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState((this.articles = parsedData.articles));
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsPanda - Top Headlines</h2>

        <div className="row">
          {this.articles.map((article) => {
            return (
              <div className="col-md-4" key={article.url}>
                <NewsItem
                  title={article.title}
                  description={article.description}
                  newsUrl={article.url}
                  imageUrl={article.urlToImage}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;

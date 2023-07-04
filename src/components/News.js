import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=21a14d027e7f4247a13b4f8780344152&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(this.state.articles);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }
  handlePrev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=21a14d027e7f4247a13b4f8780344152&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ page: this.state.page - 1, articles: parsedData.articles });
  };
  handleNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=21a14d027e7f4247a13b4f8780344152&page=${
      this.state.page + 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h2>NewsPanda - Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((article) => {
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
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrev}
          >
            &larr; Prev
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
            }
            type="button"
            class="btn btn-dark"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;

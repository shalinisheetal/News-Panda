import React, { useState, useEffect, useRef } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  let [articles, setArticles] = useState([]);
  let [page, setPage] = useState(1);
  let [loading, setLoading] = useState(true);
  let [totalResults, setTotalResults] = useState(0);
  const didMountRef = useRef(false);

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.APIKey}&page=${page}&pageSize=${props.pageSize}&q=${props.searchQuery}`;
    let data = await fetch(url);
    setLoading(true);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.APIKey}&page=${page}&pageSize=${props.pageSize}&q=${props.searchQuery}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  // does work of componentDidMount
  useEffect(() => {
    console.log(props.searchQuery);
    setPage(page + 1);
    document.title = `${capitalize(props.category)} - NewsPanda`;
    updateNews();
    if (didMountRef.current) {
      updateNews();
    } else didMountRef.current = true;

    // eslint-disable-next-line
  }, []);

  //   useEffect(() => {
  //     updateNews(page, articles, totalResults, loading);
  //   }, [page, articles, totalResults, loading]);

  return (
    <>
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "90px" }}
      >
        NewsPanda - Top {capitalize(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((article, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <NewsItem
                    title={article.title}
                    description={article.description}
                    newsUrl={article.url}
                    imageUrl={article.urlToImage}
                    author={article.author}
                    date={article.publishedAt}
                    source={article.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

News.defaultProps = {
  country: "in",
  pageSize: 10,
  category: "general",
};

export default News;

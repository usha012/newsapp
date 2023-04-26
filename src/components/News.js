import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { Spiner } from "./Spiner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalizefirstletter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizefirstletter(
      this.props.category
    )} - NewsMonkey`;
  }
  async updateNews() {
    this.props.setProgress(0);
    // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f9813eceb3364239956e21a725d57e59&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7feb8f348f9c4cf38cbd5cba05fc50e6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }
  handlePreviousClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  handleNextClick = async () => {
    console.log("next", this.state.page);
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f9813eceb3364239956e21a725d57e59&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7feb8f348f9c4cf38cbd5cba05fc50e6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      // articles:[ ...this.state.articles,...parseData.articles],
      totalResults: parseData.totalResults,
      loading: false,
    })
  };


  render() {
    return (
      <div className="container my-5">
        <div className="row justify-content-center text-center">
          <h1 className="mb-3 py-5">
            NewsMOnkey - Top {this.capitalizefirstletter(this.props.category)}{" "}
            headings
          </h1>
        </div>
        {this.state.loading && <Spiner/>}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={this.state.loading ? <Spiner/> : false}
        >
          <div className="row justify-content-center text-center mx-0 py-5">
            {this.state.articles.map((element,i) => {
              return (
                <NewsItem
                  color={this.props.color}
                  key={i }
                  title={element.title ? element.title.slice(0, 30) : ""}
                  discription={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              );
            })}
          </div>
        </InfiniteScroll>

        {/* <div className='row justify-content-between d-flex'>
          <div className='col-3'>
          <button type="button" disabled={this.state.page < 
            2} className="btn btn-dark" onClick={this.handlePreviousClick}>Previous</button>
          </div>
          <div className='col-3 text-end'>
          <button type="button btn-dark" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next</button> 
          </div>
        </div> */}
      </div>
    );
  }
}

export default News;

import {React, useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { Spiner } from "./Spiner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=>{
 

  console.log("props --- ",props.key)

  const capitalizefirstletter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
 const [articles, setAtricles] = useState([])
 const [loading, setLoading] = useState(false)
 const [page, setPage] = useState(1)
 const [totalResults, setTotalResults] = useState(0)
  
  const  updateNews = async ()=> {
    props.setProgress(10);
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f9813eceb3364239956e21a725d57e59&page=${page}&pageSize=${props.pageSize}`;

    const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7feb8f348f9c4cf38cbd5cba05fc50e6&page=${page}&pageSize=${props.pageSize}`;
   
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);
    setAtricles(parseData.articles)
    console.log("-------",parseData.totalResults)
    setTotalResults(parseData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(()=>{
     document.title = `${capitalizefirstletter(props.category)} - NewsMonkey`;
    updateNews();
  },[])


  // const handlePreviousClick = async () => {
  //   setPage(page - 1)
  //   updateNews();
  // };
  // const handleNextClick = async () => {
  //   setPage(page + 1)
  //   updateNews();
  // };
  const fetchMoreData = async () => {
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f9813eceb3364239956e21a725d57e59&page=${page}&pageSize=${props.pageSize}`;
    const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7feb8f348f9c4cf38cbd5cba05fc50e6&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json();
    setAtricles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)
    setLoading(false)
  
  };



    return (
      <div className="container my-5">
        <div className="row justify-content-center text-center">
          <h1 className="mb-3 py-5">
            NewsMOnkey - Top {capitalizefirstletter(props.category)}{" "}
            headings
          </h1>
        </div>
        {loading && <Spiner/>}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={loading ? <Spiner/> : false}
        >
          <div className="row justify-content-center text-center mx-0 py-5">
            {articles.map((element,i) => {
              return (
                <NewsItem
                  color={props.color}
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
          <button type="button" disabled={page < 
            2} className="btn btn-dark" onClick={handlePreviousClick}>Previous</button>
          </div>
          <div className='col-3 text-end'>
          <button type="button btn-dark" disabled={page + 1 > Math.ceil(totalResults/props.pageSize)} className="btn btn-dark" onClick={handleNextClick}>Next</button> 
          </div>
        </div> */}
      </div>
    );
 
}
News.defaultProps = {
  country: "in",
  pageSize: 5,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;

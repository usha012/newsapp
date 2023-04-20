import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {


  constructor(){
    super();
    console.log("hellow");
    this.state = {
    articles:[],
    loading:false,
    page:1,
    articles: [],
    }
  }
  async componentDidMount(){
    console.log("cmd");
    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=f9813eceb3364239956e21a725d57e59&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData)
    this.setState({articles: parseData.articles, totalResults:parseData.totalResults})
  }
   handlePreviousClick = async ()=>{
    console.log("previous");
    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=f9813eceb3364239956e21a725d57e59&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData)
  
    this.setState({
      page:this.state.page - 1,
      articles: parseData.articles,
    })
  }
 handleNextClick =   async ()=>{
    console.log("next",this.state.page);
  if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

  }
  else{


    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=f9813eceb3364239956e21a725d57e59&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData)
  

    this.setState({
      
      page:this.state.page + 1,
      articles: parseData.articles,
    })
  }
}
  
  render() {
    return (
      <div className='container my-5'>
        <div className='row justify-content-center'> 
        <h1 className='mb-3'>NewsMOnkey - Top headings</h1>
        {console.log(this.state.articles)}
        {this.state.articles.map((element)=>{
        return <NewsItem key={element.url} title={element.title?element.title.slice(0, 30):""} discription={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
      
        })}
            
            
           
        </div>
        <div className='row justify-content-between d-flex'>
          <div className='col-3'>
          <button type="button" disabled={this.state.page < 
            2} className="btn btn-dark" onClick={this.handlePreviousClick}>Previous</button>
          </div>
          <div className='col-3 text-end'>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next</button> 
          </div>
     
      

        </div>

      </div>
    )
  }
}

export default News
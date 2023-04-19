import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-5'>
        <div className='row'> 
        <h1 className='mb-3'>NewsMOnkey - Top headings</h1>
            <NewsItem title="my title" discription="dsc" imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
        </div>

      </div>
    )
  }
}

export default News
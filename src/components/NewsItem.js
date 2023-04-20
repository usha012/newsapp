import React, { Component } from "react";

export class NewsItem extends Component {
 
  render() {
    let { title, discription, imageUrl, newsUrl } = this.props;
    return (
      <div className="card me-3 mb-3 px-0" style={{ width: "18rem" }}>
        <img src={!imageUrl?"https://assets.mspimages.in/wp-content/uploads/2023/04/HP-14-HP-Pavilion-X360.jpg": imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{discription}...</p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;

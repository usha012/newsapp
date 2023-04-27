import React, { Component } from "react";

 const NewsItem =(props)=> {
 

    let { title, discription, imageUrl, newsUrl, author, date, source,color } = props;

    return (
      <div className="card me-3 mb-3 px-0" style={{ width: "18rem" }}>
        <img src={!  imageUrl?"https://assets.mspimages.in/wp-content/uploads/2023/04/HP-14-HP-Pavilion-X360.jpg": imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{discription}...</p>
          <span className={`position-absolute top-0 translate-middle badge rounded-pill bg-${color}`} style={{left:'78%', zIndex:'1'}}>
          {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          <p className="card-text"><small className="text-muted">By {!author?"Unknow":author} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    );
  
}

export default NewsItem;

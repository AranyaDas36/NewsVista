import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageurl, newsurl } = this.props;
    return (
      <div className="my-3">
        <div className="card bg-white rounded shadow-md" style={{ width: "18rem", height: "24rem", position: "relative" }}>
          <img
            src={!imageurl ? "https://www.ksn.com/wp-content/uploads/sites/13/2023/07/Belvita-breakfast-recall.jpg?w=1280" : imageurl}
            className="card-img-top object-cover"
            style={{ height: "12rem" }}
            alt={title}
          />
          <div className="card-body" style={{ maxHeight: "10rem", overflow: "hidden" }}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={newsurl}
              target="_blank"
              className="btn btn-sm btn-dark"
              rel="noopener noreferrer"
              style={{ position: "absolute", bottom: "1rem", left: "1rem", zIndex: "1" }}
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;

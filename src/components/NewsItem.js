import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvam9iNjcwLTAwOTgtcC1sMWJqMGZ0eS5wbmc.png?s=VKfm-YQmU9a1qFlH-HbWPwUy-DG9dM7ZTq1G73m85hs"
            }
            className="card-img-top"
            alt="..."
            style={{ width: "286px", height: "161px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title truncate">{title}</h5>
            <p className="card-text  truncate">{description}</p>
            <a href={newsUrl} className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

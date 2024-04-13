import React from "react";

function BlogBox({ item }) {
  return (
    <div className="h-100 d-flex flex-column justify-content-between">
      <div className="card">
        <div className="image">
          <img className="img-1" src={item.image} alt="" />
        </div>
      </div>
      <div className="card-body">
        <div className="title my-2">{item.title}</div>
        <div className="desc">
          <p className="ellipsisClass">{item.content.introduction}</p>
        </div>
      </div>
      <div className="card-footer border-top p-2 fs-16">
        <i className="fa-regular fa-calendar text-prime"></i>{" "}
        <span className="text-muted bottom-0">{item.date}</span>
      </div>
    </div>
  );
}

export default BlogBox;

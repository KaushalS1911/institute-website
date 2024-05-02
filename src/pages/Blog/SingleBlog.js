import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { initialData } from "./Blog";

const SingleBlog = () => {
  let params = useParams();
  const [blogData, setBlogData] = useState({});

  useEffect(() => {
    const singleData = initialData.find((_, index) => index == params.id); 
    if (singleData && singleData.content) {
      setBlogData(singleData);
    }
  }, [params.id]);
  

  return (
    <>
      <div className="container-md">
        <div className="py-md-5 py-3 mt-md-5 mt-1">
          <div className="text-center singleBoxImage height-md-450 height-250">
            <img src={blogData.image} alt="" className="h-100 w-100" />
          </div>
          <div className="d-flex justify-content-center w-100  my-md-5 my-5">
            <div className="my-md-3 fw-bold fs-lg-30 fs-md-25 fs-22">
              {blogData.title}
            </div>
          </div>
          <div className="p-4 border rounded">
            <div>
              <h5 style={{ color: "#1E293B" }} className="mb-4">
                Table of contents
              </h5>
              <ul className="tableOfContent text-secondary fs-16">
                {blogData?.content?.list_of_points.map((e, ind) => (
                  <li className={ind === 0 ? "my-2" : "my-1"} key={ind}>
                    <a href={"#" + ind}>{e.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="desciptive-data">
            {blogData?.content?.list_of_points.map((e, ind) => {
              return (
                <div className="py-3" key={ind} id={ind}>
                  <div className="fs-25 fw-semibold my-2">{e.title}</div>
                  <p className="fs-15 lh-lg text-muted">{e.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { initialData } from "./Blog";
import SubscribeNewsletter from "../utils/SubscribeNewsletter";

const SingleBlog = () => {
  let params = useParams();
  const [blogData, setBlogData] = useState({});

  useEffect(() => {
    const singleData = initialData.find((_, index) => index == params.id);
    if (singleData && singleData.content) {
      setBlogData(singleData);
    }
  }, [blogData]);

  return (
    <>
      <div className="container-md">
        <div className="py-md-5 py-3 mt-md-5 mt-1">
          <div className="text-center singleBoxImage height-md-450 height-250">
            <img src={blogData.image} alt="" className="h-100 w-100" />
          </div>
          <div className="d-flex justify-content-center my-md-5 my-5">
            <div className="text-center my-md-3 w-xl-60  fw-bold fs-lg-38 fs-md-28 fs-22">
              {blogData.title}
            </div>
          </div>
          <div className="p-4 border rounded col-md-6 offset-md-3">
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
          <div className="desciptive-data w-lg-50 offset-lg-3">
            {blogData?.content?.list_of_points.map((e, ind) => {
              return (
                <div className="py-3" key={ind} id={ind}>
                  <div className="fs-34 fw-semibold my-2">{e.title}</div>
                  <p className="lh-lg text-muted">{e.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <SubscribeNewsletter />
    </>
  );
};

export default SingleBlog;

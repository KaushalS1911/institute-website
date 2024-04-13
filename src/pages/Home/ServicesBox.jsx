import React from "react";

export const ServicesBox = ({ image, title, dec }) => {
  return (
    <div className="servicesBox ">
      <div className="detailsPart ">
        <div className="iconPart">
          <img src={image} alt="" className="hw-xl-30 hw-sm-35 hw-20" />
        </div>
        <div className="fs-xl-18 fs-14 fw-bold service-title" title={title}>
          {title}
        </div>
        <p className="section-text fw-500 fs-xl-14 fs-md-12 fs-12">{dec}</p>
      </div>
    </div>
  );
};
export default ServicesBox;

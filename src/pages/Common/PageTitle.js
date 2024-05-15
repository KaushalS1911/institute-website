// import { Typography } from "@mui/material";
// import React from "react";
// import { Link } from "react-router-dom";

// const PageTitle = ({ title, image }) => {
//   return (
//     <>
//       <section id="Slider" className="p0">
//         <div className="mainSlider">
//           <div className="slider-item position-relative">
//             <img
//               src={image}
//               alt="baner_image"
//               width={`100%`}
//               height={600}
//               className="position-relative"
//             />
//             <div className="pageTitleBanner">
//               <div className="pageTitleBox text-center">
//                 <Typography
//                   className="text-white"
//                   sx={{
//                     fontSize: { lg: "60px", xs: "36px" },
//                     letterSpacing: "-1.5px",
//                     fontWeight: "600",
//                   }}
//                 >
//                   {title}
//                 </Typography>
//                 <div className="bar"></div>
//                 <br />
//                 <div class="breadcrumb justify-content-center pathBtn  rounded-2 p25-x p10-y text-center  fs-md-20 fs-sm-16 fs-14">
//                   <li
//                     class="breadcrumb-item"
//                     style={{ color: "#fff!important", paddingRight: "10px" }}
//                   >
//                     <Link to={"/"}> Home </Link>
//                   </li>
//                   <span className="breadcrumb-item-span"> /</span>
//                   <li class="breadcrumb-item-title">{title}</li>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default PageTitle;

import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PageTitle = ({ title, image, backgroundColor = "#000" }) => {
  return (
    <section id="Slider" className="p0">
      <div className="mainSlider">
        <div
          className="slider-item position-relative"
          style={{
            backgroundColor: !image ? backgroundColor : "rgba(0,0,0,0.6)",
            height: 600,
            width: "100%",
            display: "flex",
            zIndex:'3',
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {image && (
            <img
              src={image}
              alt="banner_image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1,
              }}
            />
          )}
          <div className="pageTitleBanner-1">
              <div className="pageTitleBox text-center">
                <Typography
                  className="text-white"
                  sx={{
                    fontSize: { lg: "60px", xs: "36px" },
                    letterSpacing: "-1.5px",
                    fontWeight: "600",
                  }}
                >
                  {title}
                </Typography>
                <div className="bar"></div>
                <br />
                <div class="breadcrumb justify-content-center pathBtn  rounded-2 p25-x p10-y text-center  fs-md-20 fs-sm-16 fs-14">
                  <li
                    class="breadcrumb-item"
                    style={{ color: "#fff!important", paddingRight: "10px" }}
                  >
                    <Link to={"/"}> Home </Link>
                  </li>
                  <span className="breadcrumb-item-span"> /</span>
                  <li class="breadcrumb-item-title">{title}</li>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default PageTitle;



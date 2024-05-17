import React, { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  Box,
  Pagination,
  Modal,
  IconButton,
  Button,
} from "@mui/material";
import PageTitle from "../Common/PageTitle";
import CloseIcon from "@mui/icons-material/Close";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import img1 from "../../assets/images/gallery/1.webp";
import img3 from "../../assets/images/gallery/3.webp";
import img4 from "../../assets/images/gallery/4.webp";
import img5 from "../../assets/images/gallery/5.webp";
import img6 from "../../assets/images/gallery/6.webp";
import img7 from "../../assets/images/gallery/7.webp";
import img8 from "../../assets/images/gallery/8.webp";
import img9 from "../../assets/images/gallery/9.webp";
import img10 from "../../assets/images/gallery/10.webp";
import img11 from "../../assets/images/gallery/11.webp";
import img12 from "../../assets/images/gallery/12.webp";
import img13 from "../../assets/images/gallery/13.webp";
import img14 from "../../assets/images/gallery/14.webp";
import img15 from "../../assets/images/gallery/15.webp";
import img16 from "../../assets/images/gallery/16.webp";
import img17 from "../../assets/images/gallery/17.webp";
import img18 from "../../assets/images/gallery/18.webp";
import img19 from "../../assets/images/gallery/19.webp";
import img20 from "../../assets/images/gallery/20.webp";
import img21 from "../../assets/images/gallery/21.webp";
import img22 from "../../assets/images/gallery/22.webp";
import img23 from "../../assets/images/gallery/23.webp";
import img24 from "../../assets/images/gallery/24.webp";
import img25 from "../../assets/images/gallery/25.webp";
import img26 from "../../assets/images/gallery/26.webp";
import img27 from "../../assets/images/gallery/27.webp";
import img28 from "../../assets/images/gallery/28.webp";
import img29 from "../../assets/images/gallery/29.webp";
import img30 from "../../assets/images/gallery/30.webp";
import img31 from "../../assets/images/gallery/31.webp";
import img32 from "../../assets/images/gallery/32.webp";
import img33 from "../../assets/images/gallery/33.webp";
import img34 from "../../assets/images/gallery/34.webp";
import img35 from "../../assets/images/gallery/35.webp";

const cards = [
  { image: img30 },
  { image: img31 },
  { image: img32 },
  { image: img33 },
  { image: img34 },
  { image: img35 },
  { image: img1 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
  { image: img6 },
  { image: img7 },
  { image: img8 },
  { image: img9 },
  { image: img10 },
  { image: img11 },
  { image: img12 },
  { image: img13 },
  { image: img14 },
  { image: img15 },
  { image: img16 },
  { image: img17 },
  { image: img18 },
  { image: img19 },
  { image: img20 },
  { image: img21 },
  { image: img22 },
  { image: img23 },
  { image: img24 },
  { image: img25 },
  { image: img26 },
  { image: img27 },
  { image: img28 },
  { image: img29 },
  { image: img30 },
  { image: img31 },
  { image: img32 },
  { image: img33 },
  { image: img34 },
  { image: img35},

];

const CustomCard = ({ image, onClick }) => (
  <Card onClick={onClick}>
    <CardMedia component="img" height="250" image={image} />
  </Card>
);

const Gallery = () => {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 6;
  const pageCount = Math.ceil(cards.length / itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const displayCards = cards.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <PageTitle title="Gallery" />
      <div className="container">
        <Box sx={{ flexGrow: 1, padding: 4 }}>
          <Grid container spacing={2}>
            {displayCards.map((card, index) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                <CustomCard
                  image={card.image}
                  onClick={() => handleOpen((page - 1) * itemsPerPage + index)}
                />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
            <Pagination
              count={pageCount}
              page={page}
              onChange={handleChange}
              style={{ color: "#191d41" }}
            />
          </Box>
        </Box>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 2,
            outline: "none",
            maxWidth: "80%",
            maxHeight: "80%",
            textAlign: "center",
          }}
        >
          <IconButton
            sx={{ position: "absolute", top: 0, right: 0 }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <CardMedia
            component="img"
            height="auto"
            image={cards[currentIndex].image}
            alt={`Slide ${currentIndex}`}
          />
          <Box mt={2}>
            <Button onClick={handlePrevious}>
              <ArrowBack />
            </Button>
            <Button onClick={handleNext}>
              <ArrowForward />
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Gallery;

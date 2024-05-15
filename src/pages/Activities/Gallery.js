import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Pagination,
} from "@mui/material";
import PageTitle from "../Common/PageTitle";

const cards = [
  { title: "Event 1", image: "https://via.placeholder.com/150" },
  { title: "Event 2", image: "https://via.placeholder.com/150" },
  { title: "Event 3", image: "https://via.placeholder.com/150" },
  { title: "Event 4", image: "https://via.placeholder.com/150" },
  { title: "Event 5", image: "https://via.placeholder.com/150" },
  { title: "Event 6", image: "https://via.placeholder.com/150" },
  { title: "Event 7", image: "https://via.placeholder.com/150" },
  { title: "Event 8", image: "https://via.placeholder.com/150" },
  { title: "Event 9", image: "https://via.placeholder.com/150" },
  { title: "Event 10", image: "https://via.placeholder.com/150" },
  { title: "Event 11", image: "https://via.placeholder.com/150" },
  { title: "Event 12", image: "https://via.placeholder.com/150" },
];

const CustomCard = ({ title, image }) => (
  <Card>
    <CardMedia component="img" height="250" image={image} alt={title} />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
    </CardContent>
  </Card>
);

const Gallery = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const pageCount = Math.ceil(cards.length / itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const displayCards = cards.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <>
      <PageTitle title="Gallery" />
      <div className="container">
        <Box sx={{ flexGrow: 1, padding: 4 }}>
          <Grid container spacing={2}>
            {displayCards.map((card, index) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                <CustomCard title={card.title} image={card.image} />
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}
          >
            <Pagination
              count={pageCount}
              page={page}
              onChange={handleChange}
              color="primary"
            />
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Gallery;

import React from "react";
import {useNavigate } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import PageTitle from "../Common/PageTitle";

const cards = [
  {
    id: 1,
    image: "https://i.postimg.cc/hvwx3MqM/4TPP1100.jpg",
    title: "Sardar Patel Smruti Bhavan",
    list_of_points: [
      "https://i.postimg.cc/wMkcfDjG/4TPP1382.jpg",
      "https://i.postimg.cc/fLzb7d1L/TPPS0846.jpg",
      "https://i.postimg.cc/Pq2HjRFX/TPPS0849.jpg",
      "https://i.postimg.cc/qvNDRZRB/TPPS0851.jpg",
      "https://i.postimg.cc/hvwx3MqM/4TPP1100.jpg",
    ],
  },
  {
    id: 2,
    image:
      "https://i.postimg.cc/bwBNjYYv/Whats-App-Image-2024-02-05-at-10-52-34-223968dd.jpg",
    title: "Imagicaa Amusement Theme Park",
    list_of_points: [
      "https://i.postimg.cc/bwBNjYYv/Whats-App-Image-2024-02-05-at-10-52-34-223968dd.jpg",
      "https://i.postimg.cc/3NJPRpnQ/Whats-App-Image-2024-02-05-at-10-52-36-672c2b26.jpg",
      "https://i.postimg.cc/BbLBMnv1/Whats-App-Image-2024-02-05-at-10-52-52-c56fae78.jpg",
      "https://i.postimg.cc/yxcv7NzC/Whats-App-Image-2024-02-05-at-21-18-41-e497220d.jpg",
    ],
  },
  {
    id: 3,
    image:
      "https://i.postimg.cc/XJQQJPrQ/Whats-App-Image-2024-05-16-at-9-52-22-AM-1.jpg",
    title: "Navaratri Celebration",
    list_of_points: [
      "https://i.postimg.cc/XJQQJPrQ/Whats-App-Image-2024-05-16-at-9-52-22-AM-1.jpg",
      "https://i.postimg.cc/g21T31kJ/Whats-App-Image-2024-05-16-at-9-52-22-AM.jpg",
      "https://i.postimg.cc/BvGCS3nx/Whats-App-Image-2024-05-16-at-9-52-24-AM.jpg",
      "https://i.postimg.cc/RFpfHx4p/Whats-App-Image-2024-05-16-at-9-52-25-AM.jpg",
      "https://i.postimg.cc/k5ntYg5h/Whats-App-Image-2024-05-16-at-9-52-26-AM-1.jpg",
      "https://i.postimg.cc/4dj60Rq7/Whats-App-Image-2024-05-16-at-9-52-26-AM.jpg",
    ],
  },
];

const CustomCard = ({ title, image, onClick }) => (
  <Card onClick={onClick} sx={{cursor:'pointer'}}>
    <CardMedia component="img" height="250" image={image} alt={title} />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
        {title}
      </Typography>
    </CardContent>
  </Card>
);

const Event = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <>
      <PageTitle title="Events" />
      <div className="container">
        <Box sx={{ flexGrow: 1, padding: 10}}>
          <Grid container spacing={2}>
            {cards.map((card, index) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                <CustomCard
                  title={card.title}
                  image={card.image}
                  onClick={() => handleClick(card.id)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Event;

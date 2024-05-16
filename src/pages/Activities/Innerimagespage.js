import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Card, CardMedia, Box, Modal, Button } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
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

const InnerPage = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleOpen = (index) => {
    setSelectedImageIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const card = cards.find((card) => card.id === parseInt(id));

  return (
    <>
      <PageTitle title={card.title} />
      <div className="container">
        <Box sx={{ flexGrow: 1, padding: 4 }}>
          <Grid container spacing={2}>
            {card.list_of_points.map((image, index) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                <Card onClick={() => handleOpen(index)}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={image}
                    alt={`Image ${index + 1}`}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="image-preview"
        aria-describedby="image-preview"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            textAlign: "center",
          }}
        >
          <CardMedia
            component="img"
            height="auto"
            image={card.list_of_points[selectedImageIndex]}
            alt={`Image ${selectedImageIndex + 1}`}
          />
          <Box mt={2}>
            <Button onClick={() => setSelectedImageIndex(prevIndex => (prevIndex === 0 ? card.list_of_points.length - 1 : prevIndex - 1))}>
              <ArrowBack />
            </Button>
            <Button onClick={() => setSelectedImageIndex(prevIndex => (prevIndex === card.list_of_points.length - 1 ? 0 : prevIndex + 1))}>
              <ArrowForward />
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default InnerPage;

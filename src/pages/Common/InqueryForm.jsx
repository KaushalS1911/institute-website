import React, { useState } from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  TextField,
  MenuItem,
  Button,
  CircularProgress,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const coursess = [
  "Flutter Development",
  "Android Development",
  "Game Development",
  "Full Stack Development",
  "Web Development",
  "React Native",
  "ASP.net development",
  "Web DesignMaster in UI/UX Design",
  "UI/UX Design",
  "Advance Graphics Design",
  "Adobe Illustrator",
  "Adobe XD",
  "CCC- Basic Computer courses",
  "Photoshop",
  "CorelDraw",
  "C Programming",
  "C++ Programming",
  "Java Programming",
  "IOS",
  "Advance PHP",
  "Laravel",
  "Wordpress",
  "Node JS",
  "Angular JS",
  "React JS",
  "Python",
];

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  courses: Yup.string().required("courses is required"),
  contact: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid mobile number")
    .required("Mobile Number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

function InquiryForm() {
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log(values);
    try {
      setLoading(true);
      const response = await axios.post(
        "https://jbs-institut-backend.onrender.com/api/inquiry-form",
        values
      );
      if (response.status === 200) {
        toast.success(response.data.message);
        resetForm();
      }
    } catch (error) {
      toast.error("Error", error.data.message);
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          courses: "",
          contact: "",
          email: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ values, handleChange, handleSubmit, isSubmitting, errors }) => (
          <Form onSubmit={handleSubmit} className="InquiryForm">
            <Grid container item xs={12} sm={12} md={12} lg={12}>
              <Card fullWidth>
                <CardActionArea>
                  <CardMedia
                    fullWidth
                    component="img"
                    image="https://i.postimg.cc/0Q9qxJdM/colleagues-using-laptops-notebooks-learning-study-session-23-2149285424.avif"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Grid>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ textAlign: "center" }}
                      >
                        INQUIRY
                      </Typography>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={24} sx={{ marginBottom: "-6px" }}>
                        <TextField
                          label="First Name"
                          name="firstName"
                          fullWidth
                          size="small"
                          value={values.firstName}
                          onChange={handleChange}
                          error={Boolean(errors.firstName)}
                          helperText={<ErrorMessage name="firstName" />}
                        />
                      </Grid>
                      <Grid item xs={24} sx={{ marginBottom: "-6px" }}>
                        <TextField
                          label="Last Name"
                          name="lastName"
                          size="small"
                          fullWidth
                          value={values.lastName}
                          onChange={handleChange}
                          error={Boolean(errors.lastName)}
                          helperText={<ErrorMessage name="lastName" />}
                        />
                      </Grid>
                      <Grid item xs={24} sx={{ marginBottom: "-6px" }}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel
                            id="courses-label"
                            sx={{ color: "#0e3c42" }}
                          >
                            courses
                          </InputLabel>
                          <Select
                            labelId="courses-label"
                            id="courses"
                            name="courses"
                            sx={{ marginTop: "8px" }}
                            size="small"
                            value={values.courses}
                            onChange={handleChange}
                            label="courses"
                            error={Boolean(errors.courses)}
                          >
                            {coursess.map((courses, index) => (
                              <MenuItem key={index} value={courses}>
                                {courses}
                              </MenuItem>
                            ))}
                          </Select>
                          <ErrorMessage
                            name="courses"
                            render={(msg) => (
                              <div
                                className="error"
                                style={{ fontSize: "14px", color: "red" }}
                              >
                                {msg}
                              </div>
                            )}
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={24} sx={{ marginBottom: "-6px" }}>
                        <TextField
                          label="Mobile Number"
                          name="contact"
                          fullWidth
                          size="small"
                          value={values.contact}
                          onChange={handleChange}
                          error={Boolean(errors.contact)}
                          helperText={<ErrorMessage name="contact" />}
                        />
                      </Grid>
                      <Grid item xs={24} sx={{ marginBottom: "-6px" }}>
                        <TextField
                          label="Email"
                          name="email"
                          fullWidth
                          size="small"
                          type="email"
                          value={values.email}
                          onChange={handleChange}
                          error={Boolean(errors.email)}
                          helperText={<ErrorMessage name="email" />}
                        />
                      </Grid>
                      <Grid item xs={24} sx={{ marginBottom: "-6px" }}>
                        <Button
                          fullWidth
                          sx={{
                            backgroundColor: "#0e3c42",
                            "&:hover": {
                              backgroundColor: "#055a64",
                            },
                          }}
                          variant="contained"
                          color="primary"
                          type="submit"
                          disabled={isSubmitting || loading}
                        >
                          {loading ? (
                            <CircularProgress size={24} />
                          ) : (
                            "Send Inquiry"
                          )}
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default InquiryForm;

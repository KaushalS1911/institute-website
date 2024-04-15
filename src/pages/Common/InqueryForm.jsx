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
} from "@mui/material";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";
import axios from "axios";

const courses = [
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
  "CCC- Basic Computer Course",
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
  course: Yup.string().required("Course is required"),
  mobileNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid mobile number")
    .required("Mobile Number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

function InquiryForm() {
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://jbs-institut-backend.onrender.com/api/inquiry",
        values
      );
      if (response.status === 200) {
        console.log("Form submitted successfully:", response.data);
        resetForm();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        course: "",
        mobileNumber: "",
        email: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {({ values, handleChange, handleSubmit, isSubmitting, errors }) => (
        <Form onSubmit={handleSubmit} className="InquiryForm">
          <div className="inq-title">INQUIRY</div>
          <Grid container spacing={2}>
            <Grid item xs={24} >
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
            <Grid item xs={24} >
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
            <Grid item xs={24}>
              <FormControl fullWidth variant="outlined">
              <InputLabel id="course-label" sx={{color:'#0e3c42'}}>Course</InputLabel>
                <Select
                  labelId="course-label"
                  id="course"
                  name="course"
                  sx={{marginTop:'8px'}}
                  size="small"
                  value={values.course}
                  onChange={handleChange}
                  label="Course"
                  error={Boolean(errors.course)}
                >
                  {courses.map((course, index) => (
                    <MenuItem key={index} value={course}>
                      {course}
                    </MenuItem>
                  ))}
                </Select>
                <ErrorMessage name="course" />
              </FormControl>
            </Grid>
            <Grid item xs={24}>
              <TextField
                label="Mobile Number"
                name="mobileNumber"
                fullWidth
                size="small"
                value={values.mobileNumber}
                onChange={handleChange}
                error={Boolean(errors.mobileNumber)}
                helperText={<ErrorMessage name="mobileNumber" />}
              />
            </Grid>
            <Grid item xs={24}>
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
            <Grid item xs={24}>
              <Button
                fullWidth
                sx={{ backgroundColor: "#0e3c42" }}
                variant="contained"
                color="primary"
                type="submit"
                disabled={isSubmitting || loading}
              >
                {loading ? <CircularProgress size={24} /> : "Send Inquiry"}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default InquiryForm;

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ContactImg from "../../assets/images/Contactus/Contact-Us_image.webp";
import axios from "axios";
import PageTitle from "../Common/PageTitle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

//Contact Validation
const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  contact: Yup.string().required("Contact is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      try {
        const response = await axios.post(
          `https://jbs-institut-backend.onrender.com/api/user-form`,
          values
        );
        if (response.status === 200) {
          toast.success(response.data.message);
          resetForm();
        }
      } catch (error) {
        toast.error("Error", error.data.message);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formik.isValid) {
      formik.handleSubmit(e);
    } else {
      formik.submitForm();
    }
  };

  return (
    <>
      <ToastContainer />
      <div id="bannerSlider" className="position-relative">
        <PageTitle title={`Contact Us`} />
      </div>
      <div className="contact-outer">
        <div className="container my-5">
          <div className="row ">
            <div className="col-lg-12">
              <form onSubmit={handleSubmit}>
                <div className="row g-3 align-items-center">
                  <div className="col-12 col-xl-6 text-center">
                    <div className="contact-image">
                      <img
                        src={ContactImg}
                        alt="contactimage"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-xl-6">
                    <div className="col-lg-12">
                      <div className="row">
                        <div className=" col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
                          <label htmlFor="your-name" className="form-label">
                            First name
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              formik.touched.firstName &&
                              formik.errors.firstName
                                ? "is-invalid"
                                : ""
                            }`}
                            id="your-name"
                            name="firstName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                          />
                          {formik.touched.firstName &&
                            formik.errors.firstName && (
                              <div className="invalid-feedback">
                                {formik.errors.firstName}
                              </div>
                            )}
                        </div>
                        <div className=" col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                          <label htmlFor="your-surname" className="form-label">
                            Last name
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              formik.touched.lastName && formik.errors.lastName
                                ? "is-invalid"
                                : ""
                            }`}
                            id="lastNmae"
                            name="lastName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                          />
                          {formik.touched.lastName &&
                            formik.errors.lastName && (
                              <div className="invalid-feedback">
                                {formik.errors.lastName}
                              </div>
                            )}
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <label htmlFor="your-email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className={`form-control ${
                          formik.touched.email && formik.errors.email
                            ? "is-invalid"
                            : ""
                        }`}
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <div className="invalid-feedback">
                          {formik.errors.email}
                        </div>
                      )}
                    </div>
                    <div className="col-xl-12">
                      <label htmlFor="your-subject" className="form-label">
                        Phone number
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          formik.touched.contact && formik.errors.contact
                            ? "is-invalid"
                            : ""
                        }`}
                        id="your-subject"
                        name="contact"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.contact}
                        maxLength={10}
                      />
                      {formik.touched.contact && formik.errors.contact && (
                        <div className="invalid-feedback">
                          {formik.errors.contact}
                        </div>
                      )}
                    </div>
                    <div className="col-xl-12">
                      <label htmlFor="your-subject" className="form-label">
                        Subject
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          formik.touched.subject && formik.errors.subject
                            ? "is-invalid"
                            : ""
                        }`}
                        id="your-subject"
                        name="subject"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.subject}
                      />
                      {formik.touched.subject && formik.errors.subject && (
                        <div className="invalid-feedback">
                          {formik.errors.subject}
                        </div>
                      )}
                    </div>
                    <div className="col-xl-12">
                      <label htmlFor="your-message" className="form-label">
                        Message
                      </label>
                      <textarea
                        className={`form-control ${
                          formik.touched.message && formik.errors.message
                            ? "is-invalid"
                            : ""
                        }`}
                        id="your-message"
                        name="message"
                        rows="5"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                      ></textarea>
                      {formik.touched.message && formik.errors.message && (
                        <div className="invalid-feedback">
                          {formik.errors.message}
                        </div>
                      )}
                    </div>
                    <div className="col-xl-12">
                      <div className="row">
                        <div className="col-md-6 mt-5">
                          <button
                            type="submit"
                            className="btn btn-dark w-50 fw-bold"
                            style={{ background: "#D46615", border: "none" }}
                          >
                            {isSubmitting ? (
                              <CircularProgress size={24} />
                            ) : (
                              "Send Message"
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row py-5 flex-wrap mx-auto">
            <div className="col-lg-4 col-md-6 col-sm-12 my-3">
              <div className="contact-info-box bg-light p-4">
                <div className="contact-icon mx-auto">
                  <i class="fa-regular fa-envelope"></i>
                </div>
                <h3 className="fw-medium fs-20 my-3">Mail Here</h3>
                <p className="text-secondary fs-lg-16 fs-md-14 fs-13">
                  <a href="mailto:jbs.itinstitute@gmail.com">
                    jbs.itinstitute@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 my-3">
              <a href="#map">
                <div className="contact-info-box bg-light p-4">
                  <div className="contact-icon mx-auto">
                    <i class="fa-solid fa-location-dot"></i>
                  </div>
                  <h3 className="fw-medium fs-20 my-3">Visit Here</h3>
                  <p className="text-secondary fs-lg-16 fs-md-14 fs-13">
                    F-38, City Center, Yogi Chowk,Chikuwadi, Varachha, Surat,
                    Gujarat 395010
                  </p>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 my-3 ">
              <div className="contact-info-box bg-light p-4">
                <div className="contact-icon mx-auto">
                  <i class="fa-solid fa-phone"></i>
                </div>
                <h3 className="fw-medium fs-20 my-3">Call Here</h3>
                <p className="text-secondary fs-lg-16 fs-md-14 fs-13">
                  <Link to="tel:+917984443901">+91 7984443901</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 mt-5 mb-4" id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.4152472441606!2d72.88572987520234!3d21.215376181343018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f155c0ad929%3A0x97b93382aed70c3a!2sJBS%20IT%20Institute!5e0!3m2!1sen!2sin!4v1710151880321!5m2!1sen!2sin"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="map"
            className="w-100"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;

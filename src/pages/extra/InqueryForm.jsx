import React, { useState } from 'react'
import '../../assets/css/style/style.css'
import { BeatLoader } from 'react-spinners';


function InqueryForm() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        course: '',
        mobileNumber: '',
        email: '',
    });


    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        course: '',
        mobileNumber: '',
        email: '',
    });



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        validateInput(name, value);
    };

    const handleCourseChange = (e) => {
        const selectedCourse = e.target.value;
        setFormData({
            ...formData,
            course: selectedCourse,
        });
    };

    const validateInput = (name, value) => {
        console.log(name, value);
        switch (name) {
            case 'firstName':
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    firstName: value.trim() === '' ? 'Full Name is required' : '',
                }));
                break;

            case 'lastName':
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    lastName: value.trim() === '' ? 'Last Name is required' : '',
                }));
                break;

            case 'course':
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    course: value.trim() === '' ? 'Course is required' : '',
                }));
                break;

            case 'mobileNumber':
                const mobileRegex = /^[0-9]{10}$/;
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    mobileNumber: mobileRegex.test(value) ? '' : 'Invalid mobile number',
                }));
                break;

            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    email: emailRegex.test(value) ? '' : 'Invalid email address',
                }));
                break;

            default:
                break;
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();


        setLoading(true);
        for (const [name, value] of Object.entries(formData)) {
            validateInput(name, value);
        }

        if (Object.values(errors).some((error) => error !== '')) {
            alert('Please fix the errors in the form before submitting.');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('https://jbs-it-institute-default-rtdb.firebaseio.com/InquiryForm.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormData({
                    firstName: '',
                    lastName: '',
                    course: '',
                    mobileNumber: '',
                    email: '',
                });
                setErrors({
                    firstName: '',
                    lastName: '',
                    course: '',
                    mobileNumber: '',
                    email: '',
                });
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
        finally {
            setLoading(false);
        }
    };


    return (
        <>
            <div className="inqury-form-outer">
                <form method="POST" onSubmit={handleSubmit}>

                    <div className="col-lg-12">
                        <label for="firstname" class="form-label">First Name</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i class="fas fa-user"></i></span>
                            <input type="text" className="form-control" placeholder="First Name"
                                name="firstName"
                                id="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required />
                        </div>
                        <div className="error-message">{errors.firstName}</div>
                    </div>

                    <div className="col-lg-12">
                        <label for="last name" class="form-label">Last Name</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i class="fas fa-user"></i></span>
                            <input type="text"
                                className="form-control"
                                placeholder="Last Name"
                                name="lastName"
                                id="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required />
                        </div>
                        <div className="error-message">{errors.lastName}</div>
                    </div>

                    <div className="col-lg-12">
                        <label for="Course" class="form-label">Course:</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i class="fas fa-bars"></i></span>
                            <select class="form-select"
                                name="course"
                                id="course"
                                value={formData.course}
                                onChange={handleCourseChange}
                            >
                                <option value="Master In Flutter Development">Master In Flutter Development </option>
                                <option value="Master In Android Development">Master In Android Development </option>
                                <option value="Master In Game Development"> Master In Game Development</option>
                                <option value="Master In Full Stack Development">Master In Full Stack Development </option>
                                <option value="Master In Web Development"> Master In Web Development</option>
                                <option value="Master In React Native"> Master In React Native</option>
                                <option value="Master In ASP.net development"> Master In ASP.net development</option>
                                <option value="Master In Web DesignMaster in UI/UX Design"> Master In Web DesignMaster in UI/UX Design</option>
                                <option value="Master in UI/UX Design">Master in UI/UX Design </option>
                                <option value="Advance Graphics Design">Advance Graphics Design </option>
                                <option value="Adobe Illustrator"> Adobe Illustrator</option>
                                <option value="Adobe XD"> Adobe XD</option>
                                <option value="CCC- Basic Computer Course"> CCC- Basic Computer Course</option>
                                <option value="Photoshop">Photoshop </option>
                                <option value="CorelDraw"> CorelDraw</option>
                                <option value="C Programming">C Programming </option>
                                <option value="C++ Programming">C++ Programming </option>
                                <option value="Java Programming"> Java Programming</option>
                                <option value="IOS"> IOS</option>
                                <option value="Advance PHP"> Advance PHP</option>
                                <option value="Laravel">Laravel </option>
                                <option value="Wordpress">Wordpress </option>
                                <option value="Node JS">Node JS </option>
                                <option value="Angular JS"> Angular JS</option>
                                <option value="React JS"> React JS</option>
                                <option value="Python"> Python</option>
                            </select>
                        </div>
                        <div className="error-message">{errors.course}</div>
                    </div>

                    <div className="col-lg-12">
                        <label htmlFor="mobilenumber" className="form-label">
                            Mobile Number
                        </label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fas fa-mobile"></i></span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Mobile No"
                                name="mobileNumber"
                                id="mobileNumber"
                                value={formData.mobileNumber}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="error-message">{errors.mobileNumber}</div>
                    </div>

                    <div className="col-lg-12">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="far fa-envelope"></i></span>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email id"
                                name="email"
                                id="email"
                                onChange={handleInputChange}
                                value={formData.email}
                                required
                            />
                        </div>
                        <div className="error-message">{errors.email}</div>
                    </div>
                    <div className="input-group-btn mt-4">
                        <button
                            className="btn"
                            type="submit"
                            disabled={loading || Object.values(errors).some((error) => error !== '')}
                        >
                             {loading ? <BeatLoader color="#ffffff" size={8} margin={2} /> : 'Send'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default InqueryForm;

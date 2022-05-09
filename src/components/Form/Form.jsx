import React, {useState} from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from 'yup';
import "./Form.scss"
import contactImage from "../../assests/images/Img_Contact.png"


const Form = () => {
  
     const [serverState, setServerState] = useState();
     const handleServerResponse = (ok, msg) => {
       setServerState({ok, msg});
     };
     const handleOnSubmit = (values, actions) => {
       axios({
         method: "POST",
         url: "https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit",
         data: values
       })
         .then(response => {
           actions.setSubmitting(false);
           actions.resetForm();
           handleServerResponse(true, "Thanks!");
         })
         .catch(error => {
           actions.setSubmitting(false);
           handleServerResponse(false, error.response.data.error);
         });
     };
  
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'Must be 5 characters or more')
        .required('Required'),
      phoneNumber: Yup.number()
        .max(9, 'Must be 9 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string()
      .min(5, 'Must be 5 characters or more')
      .required('Required')

    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  
  return (
    <div className="page">

    <form onSubmit={formik.handleSubmit} className="form" onSubmit = {handleOnSubmit}>
     
      <label htmlFor="fullName" className="form__label"> Full Name</label>
      <input
       className="form__input"
        id="fullName"
        name="fullName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.fullName}
      />
      {formik.touched.fullName && formik.errors.fullName ? (
        <div>{formik.errors.fullName}</div>
      ) : null}

      <label htmlFor="email" className="form__label">Email Address</label>
      <input
        className="form__input"
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <label htmlFor="phoneNumber" className="form__label"> Phone Number </label>
      <input
        className="form__input"
        id="phoneNumber"
        name="phoneNumber"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.phoneNumber}
      />
      {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
        <div>{formik.errors.phoneNumber}</div>
      ) : null}

      <label htmlFor="message" className="form__label">Message </label>
      <textarea
       className="form__input"
        id="message"
        name="message"
        rows="10"
        
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
        />
      {formik.touched.message && formik.errors.message ? (
        <div>{formik.errors.message}</div>
      ) : null}

      <button type="submit">Submit</button>
      {serverState && (
                  <p className={!serverState.ok ? "errorMsg" : ""}>
                    {serverState.msg}
                  </p>
                )}

      
      
    </form>
    
    <img src={contactImage} className="form__image"/> 
    

    </div>
  );
};

export default Form;

import React, { useState } from "react";
// import {Form, Formik,Field,ErrorMessage} from 'formik'
import axios from "axios";
import * as Yup from "yup";
import "./Form.scss";
import contactImage from "../../assests/images/Img_Contact.png";

const Form = () => {
  const [addressOption, showAddressOption] = useState(false);
  const handleCheck = () => {
    showAddressOption(!addressOption);
  };

  const [queries, setQueries] = useState({
    FullName: "",
    EmailAddress: "",
    PhoneNumbers: [""],
    Message: "",
    bIncludeAddressDetails: true,
    AddressDetails: {
      AddressLine1: "",
      AddressLine2: "",
      CityTown: "",
      StateCounty: "",
      Postcode: "",
      Country: "",
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      "https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit",
      {
        method: "POST",

        headers: {
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin':'*',
           'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS',
        },
        body: JSON.stringify(queries),
      }
    )
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
    event.target.reset();
  };

  return (
    <div className="form">
      <h2>Contact us</h2>

      <form className="form__card" onSubmit={handleSubmit}>
        <label className="form__label">Full Name</label>
        <input
          className="form__input"
          type="text"
          onInput={(event) =>
            setQueries({ ...queries, FullName: event.target.value })
          }
        />

        <label className="form__label">Email</label>
        <input
          className="form__input"
          type="text"
          onInput={(event) =>
            setQueries({ ...queries, EmailAddress: event.target.value })
          }
        />

        <label className="form__label">phone Number</label>
        <input
          className="form__input"
          type="number"
          onInput={(event) =>
            setQueries({ ...queries, PhoneNumbers: event.target.value })
          }
        />

        <label className="form__label">Message</label>
        <textarea
          rows="7"
          cols="30"
          className="form__input"
          type="text"
          onInput={(event) =>
            setQueries({ ...queries, message: event.target.value })
          }
        ></textarea>

        <input
          type="checkbox"
          name="myCheck"
          id="myCheck"
          onClick={handleCheck}
        />
        <label htmlFor="myCheck"> Add address?</label>

        {addressOption && (
          <>
            <label className="form__label">Address line 1</label>
            <input
              className="form__input"
              type="text"
              onInput={(event) =>
                setQueries({
                  ...queries,
                  AddressDetails: {
                    ...queries.AddressDetails,
                    AddressLine1: event.target.value,
                  },
                })
              }
            />

            <label className="form__label">Address line 2</label>
            <input
              className="form__input"
              type="text"
              onInput={(event) =>
                setQueries({
                  ...queries,
                  AddressDetails: {
                    ...queries.AddressDetails,
                    AddressLine2: event.target.value,
                  },
                })
              }
            />

            <label className="form__label">City</label>
            <input
              className="form__input"
              type="text"
              onInput={(event) =>
                setQueries({
                  ...queries,
                  AddressDetails: {
                    ...queries.AddressDetails,
                    CityTown: event.target.value,
                  },
                })
              }
            />

            <label className="form__label">State </label>
            <input
              className="form__input"
              type="text"
              onInput={(event) =>
                setQueries({
                  ...queries,
                  AddressDetails: {
                    ...queries.AddressDetails,
                    StateCounty: event.target.value,
                  },
                })
              }
            />

            <label className="form__label">postcode </label>
            <input
              className="form__input"
              type="text"
              onInput={(event) =>
                setQueries({
                  ...queries,
                  AddressDetails: {
                    ...queries.AddressDetails,
                    Postcode: event.target.value,
                  },
                })
              }
            />

            <label className="form__label">country </label>
            <input
              className="form__input"
              type="text"
              onInput={(event) =>
                setQueries({
                  ...queries,
                  AddressDetails: {
                    ...queries.AddressDetails,
                    Country: event.target.value,
                  },
                })
              }
            />
          </>
        )}

        {/* <label className="form__label">
    Address Details
    </label>
    <textarea rows="7" cols="30" className="form__input" type="text" onInput={(event)=> setQueries({...queries, AddressDetails: event.target.value})} ></textarea>




  
   
 
  <img src={contactImage} className="form__image"/>  */}

        <button type="submit" className="form__submit">
          
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;
// const Form = () => {

//      const [form, setForm] = useState( {
//       fullName: "",
//       phoneNumber: "",
//       email: "",
//       message: ""

//      });
//      const handleOnSubmit = (event) => {
//       event.preventDefault()
//       fetch("https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(form)
//       })
//       .then((response) => response.json())
//       .then((json => console.log(json)))
//       .catch(err => console.log(err))
//       event.target.reset();
//     }

//   const initialValues = {
//       fullName: "",
//       phoneNumber: "",
//       email: "",
//       message: "",
//     };
//     validationSchema: Yup.object({
//       fullName: Yup.string()
//         .min(5, 'Must be 5 characters or more')
//         .required('Required'),
//       phoneNumber: Yup.number()
//         .max(9, 'Must be 9 characters or less')
//         .required('Required'),
//       email: Yup.string().email('Invalid email address').required('Required'),
//       message: Yup.string()
//       .min(5, 'Must be 5 characters or more')
//       .required('Required')

//     }),
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//     },

//   return (
//     <div className="page">

//     <form onSubmit={formik.handleSubmit} className="form" onSubmit = {handleOnSubmit}>

//       <label htmlFor="fullName" className="form__label"> Full Name</label>
//       <input
//        className="form__input"
//         id="fullName"
//         name="fullName"
//         type="text"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.fullName}
//         onInput={(event)=> setForm({...form,  fullName: event.target.value})} />
//       {formik.touched.fullName && formik.errors.fullName ? (
//         <div>{formik.errors.fullName}</div>
//       ) : null}

//       <label htmlFor="email" className="form__label">Email Address</label>
//       <input
//         className="form__input"
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.email}
//         onInput={(event)=> setForm({...form, email: event.target.value})} />
//       {formik.touched.email && formik.errors.email ? (
//         <div>{formik.errors.email}</div>
//       ) : null}

//       <label htmlFor="phoneNumber" className="form__label"> Phone Number </label>
//       <input
//         className="form__input"
//         id="phoneNumber"
//         name="phoneNumber"
//         type="number"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.phoneNumber}
//         onInput={(event)=> setForm({...form,phoneNumber: event.target.value})}
//       />
//       {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
//         <div>{formik.errors.phoneNumber}</div>
//       ) : null}

//       <label htmlFor="message" className="form__label">Message </label>
//       <textarea
//        className="form__input"
//         id="message"
//         name="message"
//         rows="10"

//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.message}
//         onInput={(event)=> setForm({...form, message: event.target.value})}
//         />
//       {formik.touched.message && formik.errors.message ? (
//         <div>{formik.errors.message}</div>
//       ) : null}

//       <button type="submit">Submit</button>

//     </form>

//     <img src={contactImage} className="form__image"/>

//     </div>
//   );
// };

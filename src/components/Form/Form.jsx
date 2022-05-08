import React from 'react';
 import { useFormik } from 'formik';
 

 const validate = values => {
  const errors = {};
  if (!values.fullName) {
    errors.fullName = 'Required';
  } else if (values.fullName.length < 5) {
    errors.fullName = 'Must be 5 characters or more';
  }



  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

 const Form = () => {
   // Note that we have to initialize ALL of fields with values. These
   // could come from props, but since we don’t want to prefill this form,
   // we just use an empty string. If we don’t do this, React will yell
   // at us.
   const formik = useFormik({
     initialValues: {
       fullName: '',
       phoneNumber: '',
       email: '',
       message: '',
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });
   return (
     <form onSubmit={formik.handleSubmit}>
       <label htmlFor="fullName"> Full Name</label>
       <input
         id="fullName"
         name="fullName"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.fullName}
       />
          {formik.touched.fullName && formik.errors.fullName ? ( <div>{formik.errors.fullName}</div>) : null}
 
 
 
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
       />
        {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>): null}

      <label htmlFor="phoneNumber"> Phone Number </label>
       <input
         id="phoneNumber"
         name="phoneNumber"
         type="number"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.phoneNumber}
       />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (<div>{formik.errors.phoneNumber}</div>) : null}

<label htmlFor="message">Message</label>
       <input
         id="message"
         name="message"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.message}
       />
        {formik.touched.message && formik.errors.message ? (<div>{formik.errors.message}</div>) : null}
 
       <button type="submit">Submit</button>
     </form>
   );
 };

 export default Form; 
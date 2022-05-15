import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Form.scss";
import contactImage from "../../assets/images/Img_Contact.png";
import CTAButton from "../CTAButton/CTAButton";

const Form = () => {
  const [bIncludeAddressDetails, showbIncludeAddressDetails] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      FullName: "",
      EmailAddress: "",
      PhoneNumbers: [""],
      Message: "",
      bIncludeAddressDetails: false,
      AddressDetails: {
        AddressLine1: "",
        AddressLine2: "",
        CityTown: "",
        StateCounty: "",
        Postcode: "",
        Country: "",
      },
    },
  });
  // console.log('', errors)

  const handleCheck = () => {
    showbIncludeAddressDetails(!bIncludeAddressDetails);
    setQueries({ ...queries, bIncludeAddressDetails: true });
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

  const onSubmit = (event) => {
    fetch(
      "https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(queries),
      }
    )
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
    reset();
  };

  return (
    <div className="page">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <section className="form__flex--labels">
          <div className="form__flex--unit">
            <label className="form__label">Full Name</label>
            <input
              className="form__input"
              type="text"
              {...register("FullName", {
                required: " Full name is required",
                minLength: {
                  value: 4,
                  message: "must be at least 4 characters",
                },
              })}
              onInput={(event) =>
                setQueries({ ...queries, FullName: event.target.value })
              }
            />
            <p>{errors.FullName?.message}</p>
          </div>
          <div className="form__flex--unit">
            <label className="form__label">Email</label>
            <input
              className="form__input"
              type="text"
              {...register("EmailAddress", {
                required: "Email is required",
                minLength: {
                  value: 4,
                  message: "must be at least 4 characters",
                },
              })}
              onInput={(event) =>
                setQueries({ ...queries, EmailAddress: event.target.value })
              }
            />
            <p>{errors.EmailAddress?.message}</p>
          </div>
        </section>

        <label className="form__label">Phone Number</label>
        <input
          className="form__input"
          type="number"
          {...register("PhoneNumbers", {
            required: "Phone Number is required",
            minLength: {
              min: 11,
              message: "must be at a minimum of 11 digits",
            },
          })}
          onInput={(event) =>
            setQueries({ ...queries, PhoneNumbers: [event.target.value] })
          }
        />
        <p>{errors.PhoneNumbers?.message}</p>

        <label className="form__label">Message</label>
        <textarea
          rows="7"
          cols="30"
          className="form__input"
          type="text"
          {...register("Message", {
            required: "A message is required",
            minLength: {
              value: 4,
              message: "must be longer than 4 characters",
            },
          })}
          onInput={(event) =>
            setQueries({ ...queries, Message: event.target.value })
          }
        ></textarea>
        <p>{errors.Message?.message}</p>

        <div className="checkbox">
          <label htmlFor="myCheck" className="checkbox-label">
            {" "}
            Add address?
          </label>
          <input
            type="checkbox"
            name="myCheck"
            id="myCheck"
            onClick={handleCheck}
            // onClick={() =>
            //   setQueries({ ...queries, bIncludeAddressDetails: true })
            // }
          />
        </div>

        {bIncludeAddressDetails && (
          <>
            <label className="form__label">Address line 1</label>
            <input
              className="form__input"
              type="text"
              {...register("AddressLine1", {
                required: "Address is required",
                minLength: {
                  value: 4,
                  message: "must be longer than 4 characters",
                },
              })}
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
            <p>{errors.AddressLine1?.message}</p>

            <label className="form__label">Address line 2</label>
            <input
              className="form__input"
              type="text"
              {...register("AddressLine2", {
                required: "Address is required",
                minLength: {
                  value: 4,
                  message: "must be longer than 4 characters",
                },
              })}
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
            <p>{errors.AddressLine2?.message}</p>

            <label className="form__label">City</label>
            <input
              className="form__input"
              type="text"
              {...register("City", {
                required: "City is required",
                minLength: {
                  value: 4,
                  message: "must be longer than 4 characters",
                },
              })}
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
            <p>{errors.CityTown?.message}</p>

            <label className="form__label">State </label>
            <input
              className="form__input"
              type="text"
              {...register("State", {
                required: "State is required",
                minLength: {
                  value: 4,
                  message: "must be longer than 4 characters",
                },
              })}
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
            <p>{errors.State?.message}</p>

            <label className="form__label">Postcode </label>
            <input
              className="form__input"
              type="text"
              {...register("Postcode", {
                required: "Poscode is required",
                minLength: {
                  value: 4,
                  message: "must be longer than 4 characters",
                },
              })}
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
            <p>{errors.Postcode?.message}</p>

            <label className="form__label">Country </label>
            <input
              className="form__input"
              type="text"
              {...register("Country", {
                required: "Country is required",
                minLength: {
                  value: 4,
                  message: "must be longer than 4 characters",
                },
              })}
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
            <p>{errors.Country?.message}</p>
          </>
        )}

        <CTAButton buttonText={"submit"} isSecondary={false} />
      </form>
      <div>
        <img src={contactImage} className="form__image" />
      </div>
    </div>
  );
};
export default Form;

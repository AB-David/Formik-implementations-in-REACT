import React from "react";
import { Formik } from "formik";
import Vote from "./Vote";

// Hold all of the logic for the form
function VoteContainer({ options }) {
  // Submit form values
  const onSubmit = async (values, { setSubmitting }) => {
    // Only called once the form is valid
    console.log("submitting...");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitting(false);
    console.log(values);
  };

  // Make sure all the data within the form is valid
  const validate = (values) => {
    const errors = {};

    if (values.name === "") {
      errors.name = "Name is required";
    }

    if (values.answer === "") {
      errors.answer = "Answer is required";
    }

    // The form will not submit without an empty `errors` object
    return errors;
  };

  // Define the behaviour of the form using the Formik component
  return (
    <Formik
      initialValues={{ name: "", answer: "" }}
      onSubmit={onSubmit}
      render={(props) => <Vote {...props} options={options} />}
      validate={validate}
    />
  );
}

export default VoteContainer;

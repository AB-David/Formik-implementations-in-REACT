import React from "react";
import classNames from "classnames";
import { Field, Form } from "formik";
import AnswerGroup from "./AnswerGroup";
import "./Vote.css";

// Potential voting options
const OPTIONS = [
  {
    label: "Working With Maps",
    value: "map"
  },
  {
    label: "Portfolio Project",
    value: "b"
  },
  {
    label: "Expense-Tracker With React",
    value: "c"
  },
  {
    label: "Spotify-Clone",
    value: "d"
  }
];

// Show the form
function Vote({ errors, isSubmitting, touched }) {
  return (
    <Form className="vote">
      <div className="input-group">
        {/* Label every element as usual */}
        <label htmlFor="name">Name</label>
        {/* Apply a class if there is an error */}
        <div
          className={classNames({
            "validation-group": true,
            error: !!errors.name && touched.name
          })}
        >
          {/* Use `Field` to connect to Formik */}
          <Field autoComplete="name" id="name" name="name" type="text" />
          {!!errors.name && touched.name && (
            <div className="error-message">{errors.name}</div>
          )}
        </div>
      </div>

      {/* Use the `component` prop to add a custom component to the form instead */}
      <Field component={AnswerGroup} options={OPTIONS} name="answer" />

      {/* Submit the form like any other */}
      <input disabled={isSubmitting} type="submit" value="Vote now" />
    </Form>
  );
}

export default Vote;

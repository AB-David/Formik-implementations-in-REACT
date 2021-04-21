import React from "react";
import classNames from "classnames";
import "./AnswerGroup.css";

// List different options to select one from
function AnswerGroup({ field, form, options }) {
  return (
    <fieldset className="answer-group">
      <legend>Which Project was the most fun?</legend>
      {/* Apply a class if there is an error */}
      <div
        className={classNames({
          "validation-group": true,
          error: !!form.errors[field.name] && form.touched[field.name]
        })}
      >
        {/* Iterate over each option and create a `radio` input for it */}
        {options.map(({ label, value }) => (
          <React.Fragment key={value}>
            <input
              {...field}
              id={`answer-${value}`}
              name={field.name}
              type="radio"
              value={value}
            />
            <label htmlFor={`answer-${value}`}>{label}</label>
          </React.Fragment>
        ))}

        {/* Conditionally show an error if the field has been touched */}
        {!!form.errors[field.name] && form.touched[field.name] && (
          <div className="error-message">{form.errors[field.name]}</div>
        )}
      </div>
    </fieldset>
  );
}

export default AnswerGroup;

import React from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
const SignUpFormFinal = () => {
  return (
    <div className="max-w-[500px] mx-auto p-5 font-[600] text-[18px]">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          intro: "",
          job: "",
          term: false,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(20, "Không quá 20 ký tự")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Không quá 20 ký tự")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          intro: Yup.string()
            .max(1000, "Không quá 1000 ký tự")
            .required("Required"),
          job: Yup.string().required("Required"),
          term: Yup.boolean().oneOf(
            [true],
            "You must accept the terms and conditions."
          ),
        })}
        onSubmit={(values, actions) => {
          actions.resetForm({
            firstName: "",
            lastName: "",
            email: "",
            intro: "",
            job: "",
            term: false,
          });
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 5000);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <MyInput
              label={"First Name"}
              placeholder="Enter your firstname"
              type="text"
              name="firstName"
              id="firstName"
            />
            <MyInput
              label={"Last Name"}
              placeholder="Enter your lastname"
              type="text"
              name="lastName"
              id="lastName"
            />
            <MyInput
              label={"Email"}
              placeholder="Enter your email"
              type="email"
              name="email"
              id="email"
            />
            <MyTextarea
              label={"Intro"}
              placeholder="Enter your intro"
              name="intro"
              id="email"
            />

            <MySelect
              label={"Job: "}
              name="job"
              className="border border-gray-400 px-5 py-3 rounded-xl outline-none"
            >
              <option value="">Select your job</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="fullstack">FullStack</option>
            </MySelect>
            <MyCheckbox
              label={"I accept the terms and conditions"}
              type="checkbox"
              name="term"
              id="term"
            />

            <button
              className="w-full rounded-xl bg-[#7D6AFF] text-white font-[700] px-5 py-3 mt-10"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="flex flex-col gap-y-3 mb-5">
        <label htmlFor={props.name || props.id}>{label}</label>
        <input
          className="border border-gray-400 px-5 py-3 rounded-xl outline-none"
          {...field}
          {...props}
        />
      </div>
      <div>
        {meta.touched && meta.error ? (
          <div className="text-[red] !block">{meta.error}</div>
        ) : null}
      </div>
    </>
  );
};

const MyTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-y-3 mb-5">
      <label htmlFor={props.name || props.id}>{label}</label>
      <textarea
        className="border border-gray-400 px-5 py-3 rounded-xl outline-none"
        {...field}
        {...props}
      ></textarea>
      {meta.touched && meta.error ? (
        <div className="text-[red]">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-y-3 mb-5">
      <label htmlFor={props.name || props.id}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="text-[red]">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MyCheckbox = ({ type, label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <div className="flex flex-row items-center mb-5">
        <input
          type="checkbox"
          className="border border-gray-400 px-5 py-3 rounded-xl outline-none mr-3 p-5 w-5 h-5"
          {...field}
          {...props}
        />
        <label htmlFor={props.name || props.id}>{label}</label>
      </div>

      {meta.touched && meta.error ? (
        <div className="text-[red]">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default SignUpFormFinal;

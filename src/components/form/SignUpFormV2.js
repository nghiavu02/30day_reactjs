import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";

const SignUpFormV2 = () => {
  console.log("redering");
  return (
    <div className="max-w-[500px] mx-auto p-5 bg-white text-[16px] font-[600]">
      <Formik
        initialValues={{ firstName: "", lastName: "" }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Không vượt quá 15 ký tự")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Không vượt quá 20 ký tự")
            .required("Required"),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <form autoComplete="off">
          <div className="flex flex-col gap-y-4">
            <label htmlFor="firstName">Firstname: </label>
            <Field
              name="firstName"
              type="text"
              className="rounded-xl px-5 py-4 border border-gray-400 outline-none"
            ></Field>
            <div className="text-[red]">
              <ErrorMessage name="firstName"></ErrorMessage>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <label htmlFor="lastName">lastName: </label>
            <Field
              name="lastName"
              type="text"
              className="rounded-xl px-5 py-4 border border-gray-400 outline-none"
            ></Field>
            <div className="text-[red]">
              <ErrorMessage name="lastName"></ErrorMessage>
            </div>
          </div>
          <div>
            <button className="bg-blue-900 w-full p-4 mt-5 rounded-xl text-white">
              SignUp
            </button>
          </div>
        </form>
      </Formik>
    </div>
  );
};

export default SignUpFormV2;

import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Required";
//   } else if (values.firstName.length > 15) {
//     errors.firstName = "Must be 15 characters or less ";
//   }
//   if (!values.lastName) {
//     errors.lastName = "Required";
//   } else if (values.lastName.length > 15) {
//     errors.lastName = "Must be 20 characters or less ";
//   }
//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }
//   return errors;
// };
const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Không vượt quá 15 ký tự")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Không vượt quá 20 ký tự")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().min(6, "Tối thiểu 6 ký tự").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log("redering");
  return (
    <div className="max-w-[500px] mx-auto p-5 bg-white text-[16px] font-[600]">
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-y-4">
          <label htmlFor="firstName">Firstname: </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="rounded-xl px-5 py-4 border border-gray-400 outline-none"
            {...formik.getFieldProps("firstName")}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="text-[red]">{formik.errors.firstName}</div>
          ) : null}
        </div>
        <div className="flex flex-col gap-y-4">
          <label htmlFor="lastName">lastName: </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="rounded-xl px-5 py-4 border border-gray-400 outline-none"
            {...formik.getFieldProps("lastName")}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="text-[red]">{formik.errors.lastName}</div>
          ) : null}
        </div>
        <div className="flex flex-col gap-y-4">
          <label htmlFor="email">email: </label>
          <input
            type="text"
            id="email"
            name="email"
            className="rounded-xl px-5 py-4 border border-gray-400 outline-none"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-[red]">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="flex flex-col gap-y-4">
          <label htmlFor="password">password: </label>
          <input
            type="text"
            id="password"
            name="password"
            className="rounded-xl px-5 py-4 border border-gray-400 outline-none"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-[red]">{formik.errors.password}</div>
          ) : null}
        </div>
        <div>
          <button className="bg-blue-900 w-full p-4 mt-5 rounded-xl text-white">
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;

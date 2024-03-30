import React from "react";
import { useForm, useController } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const FormHook = () => {
  const schemaValidated = yup.object({
    username: yup
      .string()
      .required("Please enter your username")
      .max(20, "Do not exceed 30 characters"),
    password: yup
      .string()
      .required("Please enter your password")
      .max(20, "Do not exceed 30 characters"),
    email: yup
      .string()
      .required("Please enter your email")
      .email("Invalid email address"),
    job: yup.string().required("Please select your job"),
    terms: yup
      .boolean()
      .oneOf([true], "You must accept the terms and conditions."),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    // resolver: yupResolver(schemaValidated),
  });

  const onSubmit = (values) => {
    console.log(values);
    if (isValid) {
      reset();
    }
  };

  return (
    <form
      autoComplete="off"
      className="max-w-[500px] mx-auto shadow-lg text-[16px] p-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label htmlFor="username">Username</label>
        <InputText
          control={control}
          name="username"
          id="username"
          type="text"
        />
        {errors.username?.message && (
          <p className="text-[red]">{errors.username.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="username">Password</label>
        <InputText
          control={control}
          name="password"
          id="password"
          type="password"
        />
        {errors.password?.message && (
          <p className="text-[red]">{errors.password.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <InputText control={control} name="email" id="email" type="text" />
        {errors.email?.message && (
          <p className="text-[red]">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="job">Are you</label>
        <SelectField control={control} name="job" id="job">
          <option>Select your job</option>
          <option value="1">Frontend</option>
          <option value="2">Backend</option>
          <option value="3">Fullstack</option>
        </SelectField>
        {errors.job?.message && (
          <p className="text-[red]">{errors.job.message}</p>
        )}
      </div>
      <div className="my-5">
        <label htmlFor="terms" className="flex gap-x-3 items-center">
          <CheckField name="terms" control={control}></CheckField>I accept the
          terms and conditions
        </label>
        {errors.terms?.message && (
          <p className="text-[red]">{errors.terms.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="py-3 bg-blue-700 w-full text-white rounded-xl"
      >
        Submit
      </button>
    </form>
  );
};

const InputText = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      className="px-5 py-3 border border-2 border-[#2979FF] rounded-lg w-full outline-none my-2"
      {...field}
      {...props}
    />
  );
};
const SelectField = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <select
      {...field}
      {...props}
      className="px-5 py-3 border border-2 border-[#2979FF] rounded-lg w-full outline-none my-2"
    ></select>
  );
};
const CheckField = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: false,
  });
  return (
    <input
      type="checkbox"
      className="w-7 h-7 rounded-xl border"
      {...field}
      {...props}
    />
  );
};
export default FormHook;

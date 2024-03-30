import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useController, useForm } from "react-hook-form";
const SignUpFormHook = () => {
  const schema = yup.object({
    firstName: yup.string().required("Không được để trống"),
    lastName: yup
      .string()
      .required()
      .max(10, "Không được vượt quá 10 ký tự")
      .min(2, "Tối thiểu 2 ký tự"),
    age: yup.string().required(),
    username: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    watch,
    reset,
    resetField,
    setFocus,
    setValue,
    control,
    formState: { errors, isSubmitting, isValid, isDirty, dirtyFields },
  } = useForm({
    // resolver: yupResolver(schema),
  });
  const watchShowAge = watch("age", false);
  const onSubmit = (values) => {
    console.log(values);
    // if (isValid) {
    //   console.log("valid thành công");
    //   reset();
    // }
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve();
    //   }, 5000);
    // });
  };
  //   const handleDemo = (e) => {
  //     setValue("lastName", "Nghĩa");
  //   };
  //   useEffect(() => {
  //     setFocus("firstName");
  //   }, [setFocus]);
  return (
    <div className="max-w-[500px] mx-auto p-5 bg-white text-[16px] font-[600]">
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-4">
          <label htmlFor="firstName">Firstname: </label>
          <input
            {...register("firstName", {
              required: true,
              maxLength: 15,
            })}
            className="rounded-xl px-5 py-4 border border-gray-400 outline-none"
          />
          <p className="text-[red]">{errors.firstName?.message}</p>
        </div>
        <div className="flex flex-col gap-y-4">
          <label htmlFor="lastName">lastName: </label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter your lastname"
            className="rounded-xl px-5 py-4 border border-gray-400 outline-none"
            {...register("lastName", {
              required: true,
              maxLength: 10,
              minLength: 2,
            })}
          />
          <p className="text-[red]">{errors.lastName?.message}</p>
        </div>
        <div className="flex flex-col gap-y-4">
          <label htmlFor="email">email: </label>
          <input
            type="text"
            id="email"
            name="email"
            className="rounded-xl px-5 py-4 border border-gray-400 outline-none"
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <label htmlFor="password">password: </label>
          <input
            type="text"
            id="password"
            name="password"
            className="rounded-xl px-5 py-4 border border-gray-400 outline-none"
          />
        </div>
        <div>
          <input type="checkbox" name="age" id="" {...register("age")} />
          {watchShowAge && <input type="number" placeholder="1" />}
        </div>
        <div>
          <label htmlFor="username">username: </label>
          <MyInput
            name="username"
            id="username"
            type="text"
            control={control}
          ></MyInput>
          <p className="text-[red]">{errors.username?.message}</p>
        </div>
        <div>
          <button className="bg-blue-900 w-full p-4 mt-5 rounded-xl text-white">
            {isSubmitting ? (
              <div className="w-5 h-5 border border-white rounded-full border-r-transparent border-2 animate-spin mx-auto"></div>
            ) : (
              "SignUp"
            )}
          </button>
          {/* <button className="p-5 border" onClick={handleDemo}>
            Demo
          </button> */}
        </div>
      </form>
    </div>
  );
};
const MyInput = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      className="rounded-xl px-5 py-4 border border-gray-400 outline-none"
      {...field}
      {...props}
    ></input>
  );
};

export default SignUpFormHook;

import React, { useState } from "react";
import useHandleChange from "../../hooks/useHandleChange";

const Form = () => {
  const { values, handleChangeValues } = useHandleChange({
    email: "",
    password: "",
    message: "",
    country: "vietnam",
    sex: false,
  });
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.email === "") {
      setError("Email không được để trống");
    }
    if (values.password.length < 6)
      setError("Vui lòng nhập mật khẩu lớn hơn 6 ký tự");
  };
  console.log(error);
  return (
    <div className="p-5 max-w-[400px] mx-auto">
      <form action="" autoComplete="off" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          className="p-5 border w-full mb-5"
          onChange={handleChangeValues}
          value={values.email}
        />
        <input
          type="text"
          placeholder="Enter your passowd"
          name="password"
          className="p-5 border w-full"
          onChange={handleChangeValues}
          value={values.password}
        />
        {error && <div className="text-[red]">{error}</div>}
        <button
          type="submit"
          className="p-5 bg-blue-700 w-full rounded-xl text-white font-[600] mt-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

import { useState } from "react";

export default function useHandleChange(initalvalue) {
  const [values, setValues] = useState(initalvalue);
  const handleChangeValues = (e) => {
    const type = e.target.type;
    setValues({
      ...values,
      [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  return {
    values,
    handleChangeValues,
  };
}

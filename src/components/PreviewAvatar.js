import React, { useState } from "react";
import { useEffect } from "react";

const PreviewAvatar = () => {
  const [avatar, setAvatar] = useState("");
  const handleChange = (e) => {
    const file = e.target.files[0];
    file.prevew = URL.createObjectURL(file);
    setAvatar(file);
  };
  useEffect(() => {
    return () => {
      URL.revokeObjectURL(avatar.prevew);
    };
  }, [avatar]);
  return (
    <div>
      <input type="file" onChange={handleChange} />
      {avatar && <img src={avatar.prevew} />}
    </div>
  );
};

export default PreviewAvatar;

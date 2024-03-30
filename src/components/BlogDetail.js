import React from "react";
import { useParams, useNavigate } from "react-router-dom";
const BlogDetail = () => {
  // console.log(useParams());
  const { blogId } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/profile")}>Navigate</button>
    </div>
  );
};

export default BlogDetail;

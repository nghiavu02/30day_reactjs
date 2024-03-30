import React from "react";
import { useSearchParams } from "react-router-dom";
const BlogPage = () => {
  const [searchParams, setSearchParms] = useSearchParams();
  // searchParams.get('search')
  const handleClick = (e) => {
    setSearchParms({ query: "nghia" });
  };
  return (
    <div>
      <button className="p-5 bg-blue-500" onClick={handleClick}>
        Blog
      </button>
    </div>
  );
};

export default BlogPage;

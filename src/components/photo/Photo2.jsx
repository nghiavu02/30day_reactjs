import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
const getAPI = async (page = 0) => {
  const response = await axios.get(
    `https://picsum.photos/v2/list?page=${page}&limit=9`
  );
  return response.data;
};

const Photo2 = () => {
  const [imgs, setImgs] = useState([]);
  const [nextPage, setNextPage] = useState(0);
  const handleLoadMore = useRef({});
  handleLoadMore.current = async () => {
    const rs = await getAPI(nextPage);
    const newImgs = [...imgs, ...rs];
    setImgs(newImgs);
    setNextPage(nextPage + 1);
  };
  useEffect(() => {
    handleLoadMore.current();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-3 gap-6 rounded-lg">
        {imgs.map((item, index) => (
          <div key={index} className="">
            <img
              src={item.download_url}
              alt=""
              className="w-full h-[400px] object-cover"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center text-center">
        <div>Total images: {nextPage * 9}</div>
        <button
          className="bg-blue-700 w-[300px] text-[24px] text text-white mt-5 h-[60px] rounded-[20px] font-[600]"
          onClick={handleLoadMore.current}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Photo2;

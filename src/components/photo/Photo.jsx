import React, { useEffect, useState } from "react";
import "../../index.scss";
import axios from "axios";

const getPhotos = async (page) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&&limit=8`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const Photo = () => {
  const [images, setImages] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const handleLoadMore = () => {
    getPhotos(nextPage).then((photos) => {
      const newPhotos = [...images, ...photos];
      setImages(newPhotos);
      setNextPage(nextPage + 1);
    });
  };
  useEffect(() => {
    handleLoadMore();
  }, []);
  return (
    <div className="">
      <div className="grid grid-cols-4 gap-5">
        {images?.map((item, index) => (
          <div key={index} className="">
            <div className="text-[#b55656] text-[30px] text-center">
              {item.author}
            </div>
            <div className="h-[300px]">
              <img
                src={item.download_url}
                className="w-full h-full  object-cover rounded-[20px] flex flex-wrap"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={handleLoadMore}
          className="mt-10 ml-[200px] inline-block text-[20px] px-[40px] py-[10px] bg-blue-500 text-white h-[60px]"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Photo;

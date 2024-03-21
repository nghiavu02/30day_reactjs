import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
//https://hn.algolia.com/api/v1/search?query=${query}`
const HackerNewsCopy = () => {
  const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=''`
  );
  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${search}`
      );
      setTimeout(() => {
        setDatas(response.data.hits);
        setLoading(false);
      }, 1000);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchData.current();
  }, [url]);
  return (
    <div className="w-[50%] mx-auto rounded-md shadow-lg bg-white mt-5 p-5">
      <div className="flex gap-5 mb-5">
        <input
          type="text"
          placeholder="Vui lòng nhập thông tin tìm kiếm ..."
          className="w-full border rounded-md px-5 py-2 outline-none"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="w-[150px] bg-blue-800 text-[20px] font-[600] rounded-md text-white hover:opacity-80"
          onClick={(e) =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${search}`)
          }
        >
          Search
        </button>
      </div>
      {loading && (
        <div className="border border-blue-500 border-4 w-10 h-10 border-r-transparent rounded-full mx-auto mb-5 animate-spin"></div>
      )}
      <div className="flex flex-wrap gap-5">
        {datas?.map((item, index) => (
          <div
            key={index}
            className="bg-[#ccc] rounded-2xl px-6 py-2 text-center "
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HackerNewsCopy;

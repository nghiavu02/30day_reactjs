import React, { useEffect, useState } from "react";
import axios from "axios";
// https://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const handleFetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setTimeout(() => {
        setHits(response.data.hits);
        setLoading(false);
      }, 1000);
    } catch (error) {
      setLoading(false);
      setErrorMessage(`Error: ${error}`);
    }
  };
  console.log(query);
  useEffect(() => {
    handleFetchData();
  }, [query]);
  return (
    <div className="bg-white p-5 mx-auto rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          placeholder="Nhập từ cần tìm kiếm..."
          className="border w-full rounded-md block p-4"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-blue-700 text-white font-[600]  rounded-xl  flex-shrink-0 w-[150px] hover:opacity-80"
          value={query}
        >
          Search
        </button>
      </div>
      {loading && (
        <div className="loading w-10 h-10 rounded-full border-blue-500 border-4 border-r-transparent animate-spin mx-auto mb-5"></div>
      )}
      {!loading && errorMessage && <p className="text-[red]">{errorMessage}</p>}
      <div className="flex flex-wrap gap-5">
        {hits.map((item, index) => (
          <div key={index} className="bg-[#ddd] p-2 rounded-2xl">
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HackerNews;

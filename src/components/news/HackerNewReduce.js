import axios from "axios";
import React, { useEffect, useReducer, useRef, useState } from "react";
//https://hn.algolia.com/api/v1/search?query=${query}`
const initalState = {
  datas: [],
  search: "",
  loading: true,
  url: `https://hn.algolia.com/api/v1/search?query=''`,
};
const hackerNewReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATAS":
      return { ...state, datas: action.payload };
      break;
    case "SET_SEARCH":
      return { ...state, search: action.payload };
      break;
    case "SET_LOADING":
      return { ...state, loading: action.payload };
      break;
    case "SET_URL":
      return { ...state, url: action.payload };
      break;
    default:
      break;
  }
};
const HackerNewReduce = () => {
  const [state, dispatch] = useReducer(hackerNewReducer, initalState);
  const handleFetchData = useRef({});
  //   const isMounted = useRef(true);
  //   useEffect(() => {
  //     //
  //     isMounted.current = true;
  //     return () => {
  //       // unmounted component
  //       isMounted.current = false;
  //     };
  //   }, []);
  handleFetchData.current = async () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${state.search}`
      );
      dispatch({
        type: "SET_DATAS",
        payload: response.data.hits,
      });
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    } catch (error) {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    }
  };

  useEffect(() => {
    handleFetchData.current();
  }, [state.url]);
  return (
    <div className="w-[50%] mx-auto rounded-md shadow-lg bg-white mt-5 p-5">
      <div className="flex gap-5 mb-5">
        <input
          type="text"
          placeholder="Vui lòng nhập thông tin tìm kiếm ..."
          className="w-full border rounded-md px-5 py-2 outline-none"
          onChange={(e) =>
            dispatch({
              type: "SET_SEARCH",
              payload: e.target.value,
            })
          }
        />
        <button
          className="w-[150px] bg-blue-800 text-[20px] font-[600] rounded-md text-white hover:opacity-80"
          onClick={(e) =>
            dispatch({
              type: "SET_URL",
              payload: `https://hn.algolia.com/api/v1/search?query=${state.search}`,
            })
          }
        >
          Search
        </button>
      </div>
      {state.loading && (
        <div className="border border-blue-500 border-4 w-10 h-10 border-r-transparent rounded-full mx-auto mb-5 animate-spin"></div>
      )}
      <div className="flex flex-wrap gap-5">
        {state.datas?.map((item, index) => (
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

export default HackerNewReduce;

import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    searchText(text);
  };
  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmitHandler} className="w-full max-w-sm">
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search any Image"
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="flex-shrink-0 bg-teal-500  text-sm  text-white py-1 px-2 rounded"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;

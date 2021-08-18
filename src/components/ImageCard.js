import React, { useState } from "react";

const ImageCard = ({ image, searchText }) => {
  const [text, setText] = useState("");

  const submitText = (text) => {
    searchText(text.substring(1));
  };
  return (
    <figure className="bg-gray-100 rounded p-8 shadow-lg overflow-hidden mx-4  lg:max-w-2xl lg:h-auto">
      <img
        src={image.urls.regular}
        className=" w-full inset-0 h-48 ro object-cover rounded-md"
        alt={image.alt_description}
      />
      <div className="pt-4 md:p-2 text-center md:text-center space-y-4">
        <p className="text-lg  text-center text-grey-700 tracking-widest font-normal uppercase">
          Photo by {image.user.first_name}
        </p>

        <figcaption className="font-medium">
          <ul className="flex text-center justify-center ">
            <li className="pr-2">
              <strong className="font-normal tracking-wider text-sm uppercase">
                <i class="fa fa-heart"></i> Likes: {image.likes}
              </strong>{" "}
            </li>
          </ul>
        </figcaption>
        <div className="flex p-2 md:inline-block ">
          <span
            onClick={(e) => submitText(e.target.innerText)}
            className=" transition-all inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-light hover:underline text-gray-700 mr-2 md:hidden"
            style={{ cursor: "pointer" }}
          >
            #{image.tags[0].title}
          </span>
          <span
            onClick={(e) => submitText(e.target.innerText)}
            className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-light hover:underline text-gray-700 mr-2 md:m-2"
            style={{ cursor: "pointer" }}
          >
            #{image.tags[1].title}
          </span>
          <span
            onClick={(e) => submitText(e.target.innerText)}
            className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-light hover:underline text-gray-700 mr-2 md:hidden"
            style={{ cursor: "pointer" }}
          >
            #{image.tags[2].title}
          </span>
        </div>

        <a
          className="block text-center rounded-lg p-4 transition hover:bg-gray-800  hover:text-gray-100 ease-in-out duration-700 bg-gray-300 tracking-wider border border-gray-600 w-full"
          href={image.links.html}
          target="_blank"
          rel="noreferrer"
        >
          Download
        </a>
      </div>
    </figure>
  );
};

export default ImageCard;

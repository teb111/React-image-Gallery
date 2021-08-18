import { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import Loader from "./components/Loader";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("random");

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?query=${term}&client_id=${process.env.REACT_APP_CLIENT_ID}&per_page=30`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImages(data.results);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);
  return (
    <>
      <div className="container p-2 mx-auto">
        <header className="flex justify-end content-center  w-auto p-3">
          <h4 className="text-center text-gray-300 tracking-wider">
            Oluwatobiloba &copy; {new Date().getFullYear()}
          </h4>
          <ul>
            <li>
              <ul class="flex justify-center content-center">
                <li className="transition duration-700 ease-in-out pl-2 pr-2 text-gray-200 hover:text-gray-500">
                  <a
                    href="https://twitter.com/oluwa_toobi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="transition duration-700 ease-in-out pr-2 text-gray-200 hover:text-gray-500">
                  <a
                    href="https://github.com/teb111"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa fa-github"></i>
                  </a>
                </li>
                <li className="transition duration-700 ease-in-out text-gray-200 hover:text-gray-500">
                  <a
                    href="https://www.instagram.com/_t.e_b/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </header>
        <ImageSearch searchText={(text) => setTerm(text)} />

        {!isLoading && images.length === 0 && (
          <h1 className="flex content-center justify-center tracking-wider text-gray-400 text-4xl">
            No Images Found!!
          </h1>
        )}
        {isLoading ? (
          <div className="flex content-center justify-center mx-auto my-44">
            <Loader />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
            {images.map((image) => (
              <ImageCard
                key={image.id}
                image={image}
                searchText={(text) => setTerm(text)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;

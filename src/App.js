import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import Loader from "./components/Loader";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("random");

  useEffect(() => {
    // endpoint
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
        <ImageSearch searchText={(text) => setTerm(text)} term={term} />

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
        <Footer />
      </div>
    </>
  );
}

export default App;

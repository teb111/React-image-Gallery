import { useState, useEffect } from 'react'
import Footer from './components/Footer'
import ImageCard from './components/ImageCard'
import ImageSearch from './components/ImageSearch'
import Loader from './components/Loader'

import { createClient } from 'pexels'

const client = createClient(process.env.REACT_APP_PEXELS_CLIENT_ID)

function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('random')

  useEffect(() => {
    // endpoint api
    // fetch(
    //   `https://api.unsplash.com/search/photos?query=${term}&client_id=${process.env.REACT_APP_CLIENT_ID}&per_page=30`
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data)
    //     setImages(data.results)
    //     setIsLoading(false)
    //   })
    client.photos
      .search({ query, per_page: 20 })
      .then((photos) => {
        console.log(photos)
        setImages(photos.photos)
        setIsLoading(false)
      })
      .catch((err) => console.log(err))
  }, [query])
  return (
    <>
      <div className='container p-2 mx-auto'>
        <ImageSearch searchText={(text) => setQuery(text)} term={query} />

        {!isLoading && images.length === 0 && (
          <h1 className='flex content-center justify-center tracking-wider text-gray-400 text-4xl'>
            No Images Found!!
          </h1>
        )}
        {isLoading ? (
          <div className='flex content-center justify-center mx-auto my-44'>
            <Loader />
          </div>
        ) : (
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3'>
            {images.map((image) => (
              <ImageCard
                key={image.id}
                image={image}
                searchText={(text) => setQuery(text)}
              />
            ))}
          </div>
        )}
        <Footer />
      </div>
    </>
  )
}

export default App

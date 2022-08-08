import React, { useState } from 'react'

const ImageSearch = ({ searchText, term }) => {
  const [text, setText] = useState('')

  function debounce(func, wait = 50, immediate = true) {
    var timeout
    return function () {
      var context = this,
        args = arguments
      var later = function () {
        timeout = null
        if (!immediate) func.apply(context, args)
      }
      var callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    searchText(text)
  }

  const debouncedfunction = debounce(submitHandler, 3000)

  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
      <form onKeyUp={debouncedfunction} className='w-full max-w-sm'>
        <div className='flex items-center border-b-2 border-teal-500 py-2'>
          <input
            className='appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none'
            type='text'
            placeholder='Search any Image'
            value={term === 'random' ? '' : term}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className='flex-shrink-0 bg-teal-500  text-sm  text-white py-1 px-2 rounded'
            type='submit'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  )
}

export default ImageSearch

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useQuery } from 'react-query'
import { Nav } from '../components/nav'

const search = props => (
  <div className="grid gap-12">
    <Nav />
    <SearchContainer />
  </div>
)

search.propTypes = {}

export default search

const SearchContainer = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const onInputChange = e => {
    const { value, name } = e.target
    setSearchTerm(value)
  }
  return (
    <div className="justify-items-center grid gap-6">
      <h3 className="text-grey-darkest font-serif text-xl">
        What do you want to read next?
      </h3>
      <input
        className="transition-shadow rounded shadow-massive hover:shadow-massiveHover focus:ring-2 focus:primary w-96 h-10 px-4 justify-self-center text-grey-darkest placeholder-grey-lightest"
        type="text"
        name="search"
        onChange={onInputChange}
        value={searchTerm}
        placeholder="Search by Title or Author"
      />
      {searchTerm && <BookSearchList searchTerm={searchTerm} />}
    </div>
  )
}

const fetchBooks = async ({ searchTerm }) => {
  const books = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
  )
    .then(response => response.json())
    .catch(error => {
      console.error('Error:', error)
    })
  return books
}

const BookSearchList = ({ searchTerm }) => {
  const { status, data, error } = useQuery('search-books', () =>
    fetchBooks({ searchTerm })
  )

  if (status === 'loading') {
    return <span>Loading...</span>
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>
  }
  console.log(data, error)
  return (
    <>
      {data &&
        status === 'success' &&
        data.items.map((book, i) => <p>{book.volumeInfo.title}</p>)}
    </>
  )
}

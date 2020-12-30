import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import PropTypes from 'prop-types'
import { fetchBooks } from '../api'
import { BookListItem } from './BookListItem'

export const BookSearchList = ({ term }) => {
  const { status, data, error, refetch } = useQuery(
    ['search-books', term],
    () => fetchBooks({ term })
  )

  useEffect(() => {
    refetch()
  }, [term])

  if (status === 'loading') {
    return <span>Loading...</span>
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>
  }

  return (
    <div className="grid grid-flow-row gap-14">
      {data &&
        status === 'success' &&
        data.items.map(({ volumeInfo, id }, i) => (
          <BookListItem
            key={id}
            id={id}
            authors={volumeInfo.authors && volumeInfo.authors.join(', ')}
            title={
              volumeInfo.subtitle
                ? `${volumeInfo?.title}: ${volumeInfo.subtitle}`
                : volumeInfo.title
            }
            coverURL={volumeInfo.imageLinks?.thumbnail}
            rating={volumeInfo?.averageRating}
          />
        ))}
    </div>
  )
}

BookSearchList.propTypes = { term: PropTypes.string }

import React from 'react'
import PropTypes from 'prop-types'
import { useQuery } from 'react-query'
import { fetchBook } from '../../api'
import { Nav } from '../../components/Nav'
import { BookDetail } from '../../components/BookDetail'

const book = ({ bookData }) => {
  const { status, data, error } = useQuery(
    ['fetch-book', bookData.id],
    () => fetchBook({ id: bookData.id }),
    { initialData: bookData }
  )
  if (status === 'loading') {
    return <span>Loading...</span>
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>
  }
  const {
    title,
    subtitle,
    authors,
    averageRating,
    imageLinks,
    description,
  } = bookData.volumeInfo
  return (
    <div className="grid gap-12">
      <Nav />
      <BookDetail
        title={subtitle ? `${title}: ${subtitle}` : title}
        description={description}
        authors={authors && authors.join(', ')}
        rating={averageRating}
        coverURL={
          imageLinks?.small ||
          imageLinks?.thumbnail ||
          imageLinks?.smallThumbnail
        }
      />
    </div>
  )
}

book.propTypes = { bookData: PropTypes.object }

export default book

export const getServerSideProps = async ({ params }) => {
  const { id } = params
  const getBookData = await fetchBook({ id })
  return {
    props: {
      bookData: getBookData,
    },
  }
}

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { BookMark } from './icons'
import { Rating } from './Rating'

export const BookListItem = ({
  id,
  title,
  authors,
  rating = 0,
  coverURL,
  isOnMyShelf = false,
}) => (
  <Link href={`/book/${id}`}>
    <div className="grid rounded-lg transition-shadow grid-cols-bookItem gap-12 w-full max-w-2xl shadow-massive hover:shadow-massiveHover p-8 dark:bg-grey-darkest">
      {coverURL && (
        <Image
          className="rounded"
          src={coverURL}
          alt={`Cover art for ${title} by ${authors}`}
          width={106}
          height={161}
        />
      )}
      {!coverURL && (
        <div className="bg-grey-faint rounded-md w-bookListItemCover h-bookListItemCover" />
      )}
      <div className="grid grid-flow-row items-start">
        <h3>{title}</h3>
        <h5 className="text-grey-light dark:text-grey-light  font-sans text-l">
          by {authors}
        </h5>

        <Rating rating={rating} />
      </div>
      <BookMark active={isOnMyShelf} />
    </div>
  </Link>
)

BookListItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  authors: PropTypes.string,
  rating: PropTypes.number,
  coverURL: PropTypes.string,
  isOnMyShelf: PropTypes.bool,
}

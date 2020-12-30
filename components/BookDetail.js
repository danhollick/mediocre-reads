import React from 'react'
import Image from 'next/image'
import parse from 'html-react-parser'
import { Rating } from './Rating'

export const BookDetail = ({
  title,
  authors,
  rating = 0,
  coverURL,
  description,
  isOnMyShelf = true,
}) => (
  <div className="grid grid-cols-3">
    <div className="col-span-1">
      {coverURL && (
        <Image
          className="rounded-lg"
          height={425}
          width={280}
          src={coverURL}
          alt={`Cover art for ${title} by ${authors}`}
        />
      )}
      {!coverURL && (
        <div className="bg-grey-faint rounded-md w-bookListItemCover h-bookListItemCover" />
      )}
    </div>
    <div className="col-span-2 grid gap-8">
      <div className="grid gap-3">
        <h1>{title}</h1>
        <h5>by {authors}</h5>
      </div>
      <Rating rating={rating} />
      <p className="font-sans text-grey-medium max-w-prose">
        {parse(description)}
      </p>
    </div>
  </div>
)

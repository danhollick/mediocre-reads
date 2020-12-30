import React from 'react'
import { Star } from './icons'

export const Rating = ({ rating = 0 }) => (
  <div className="grid grid-flow-col justify-start gap-4 place-items-center">
    <p className="text-grey-darkest  font-sans dark:text-grey-faint">
      {rating || '-'}
    </p>
    <div className="grid grid-flow-col justify-start">
      {[1, 2, 3, 4, 5].map((star, i) => (
        <Star fill="empty" rating={rating / i} />
      ))}
    </div>
    <p className="text-grey-light font-sans dark:text-grey-medium">
      - Google Books
    </p>
  </div>
)

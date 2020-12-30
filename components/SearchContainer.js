import React from 'react'
import { DebounceInput } from 'react-debounce-input'
import { useRouter } from 'next/router'
import { BookSearchList } from './BookSearchList'

export const SearchContainer = () => {
  const router = useRouter()
  const { term } = router.query

  const onInputChange = e => {
    const { value, name } = e.target
    router.push({ pathname: '/search', query: { term: value } })
  }
  return (
    <div className="justify-items-center grid gap-40">
      <div className="justify-items-center grid gap-12">
        <h3>What do you want to read next?</h3>
        <DebounceInput
          className="transition-shadow rounded shadow-massive hover:shadow-massiveHover focus:ring-2 focus:primary w-96 h-10 px-4 justify-self-center text-grey-darkest placeholder-grey-lightest"
          type="text"
          name="search"
          minLength={2}
          debounceTimeout={300}
          onChange={onInputChange}
          value={term}
          placeholder="Search by Title or Author"
        />
      </div>

      {term && <BookSearchList term={term} />}
      {/* <BookSearchList searchTerm={searchTerm} /> */}
    </div>
  )
}

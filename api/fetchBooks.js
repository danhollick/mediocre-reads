export const fetchBooks = async ({ term }) => {
  const books = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${term}&projection=full`
  )
    .then(response => response.json())
    .catch(error => {
      console.error('Error:', error)
    })
  return books
}

export const fetchBook = async ({ id }) => {
  const fullBook = await fetch(
    `https://books.googleapis.com/books/v1/volumes/${id}?projection=FULL`
  )
    .then(response => response.json())
    .catch(error => {
      console.error('Error:', error)
    })
  return fullBook
}

export const BookMark = ({ active = false }) => (
  <svg
    className={`w-6 h-6 fill-current ${
      active ? `text-primary` : `text-grey-faint dark:text-grey-medium`
    }`}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
  </svg>
)

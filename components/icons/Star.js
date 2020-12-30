export const Star = ({ rating = 0 }) => (
  <svg
    className={`w-5 h-5 `}
    width="16"
    height="15"
    viewBox="0 0 16 15"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className={`fill-current ${
        rating >= 1.25
          ? `text-primary`
          : `text-grey-faint dark:text-grey-medium`
      }`}
      d="M9.40457 5.52786L7.60846 0V11.0557L12.3107 14.4721L10.5146 8.94427L15.2169 5.52786H9.40457Z"
    />
    <path
      className={` fill-current ${
        rating > 1 ? `text-primary` : `text-grey-faint dark:text-grey-medium`
      }`}
      d="M5.81235 5.52786L7.60846 0V11.0557L2.90618 14.4721L4.70229 8.94427L7.62939e-06 5.52786H5.81235Z"
    />
  </svg>
)

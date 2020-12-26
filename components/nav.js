import Link from 'next/link'
import { useRouter } from 'next/router'

const links = [
  { href: '/search', label: 'Search' },
  { href: '/shelf', label: 'My Shelf' },
  { href: '/friends', label: 'Friends' },
]

export const Nav = () => {
  const { pathname } = useRouter()
  return (
    <nav className="font-serif no-underline py-4">
      <ul className="grid grid-cols-nav">
        <li>
          <Link href="/">
            <a className="text-grey-darkest text-2xl  dark:text-grey-faint">
              Mediocre Reads
            </a>
          </Link>
        </li>
        <ul className="grid grid-cols-3 gap-12">
          {links.map(({ href, label }, i) => (
            <LinkItem
              key={i}
              href={href}
              label={label}
              active={pathname === href}
            />
          ))}
        </ul>
      </ul>
    </nav>
  )
}

const LinkItem = ({ href, label, active }) => (
  <li
    key={`${href}${label}`}
    className={`
    justify-self-start transition-colors border-b-2 ${
      active ? `border-primary` : `border-transparent`
    }`}
  >
    <Link href={href}>
      <a className=" text-grey-darkest dark:text-grey-faint">{label}</a>
    </Link>
  </li>
)

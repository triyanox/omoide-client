import { FilledButton } from './Buttons'
import Link from 'next/link'
import ThemeToggle from './Toggle'
import { useUser } from './UserContext'

const Navbar = () => {
  const { loggedIn } = useUser()
  const handleLogout = async () => {
    localStorage.removeItem('token')
    window.location.href = '/'
  }
  return (
    <nav className="flex w-full items-center justify-between px-6 py-4 sm:px-8 md:px-12">
      <Link href="/" passHref>
        <a className="text-2xl font-bold text-black dark:text-white">Omoide</a>
      </Link>
      <div className="items flex justify-center gap-4">
        {loggedIn ? (
          <FilledButton text="Logout" onClick={handleLogout} />
        ) : (
          <Link href="/login" passHref>
            <a>
              <FilledButton text="Login" />
            </a>
          </Link>
        )}
        <ThemeToggle />
      </div>
    </nav>
  )
}

export default Navbar

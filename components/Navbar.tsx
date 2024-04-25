import Link from "next/link"
import { SignInButton } from './Buttons';


const Navbar = () => {
  return (
    <nav className="flex justify-between py-2 px-4 items-center bg-slate-200">
      <Link href="/">
        Brainsapce
      </Link>
       <ul className="flex gap-6 items-center">
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/blog">
            Blog
          </Link>
        </li> 
        <li>
          <Link href="/users">
            Users
          </Link>
        </li>
        <li>
          <SignInButton />
        </li>
       </ul>
    </nav>
  )
}

export default Navbar

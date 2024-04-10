import Link from "next/link"


const Navbar = () => {
  return (
    <nav className="w-screen flex justify-between py-2 px-4 bg-primary">
      <Link href="/">
        Brainsapce
      </Link>
       <ul className="flex gap-6">
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
       </ul>
    </nav>
  )
}

export default Navbar

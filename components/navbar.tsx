"use client"

import { Link as ScrollLink } from "react-scroll"

export default function Navbar() {
  return (
    <nav className="flex items-center space-x-6">
      {["home", "skills", "projects", "contact"].map((item) => (
        <ScrollLink
          key={item}
          to={item}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-sm font-medium text-white hover:text-gray-300 transition-colors cursor-pointer"
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </ScrollLink>
      ))}
    </nav>
  )
}


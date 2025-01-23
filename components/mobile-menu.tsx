"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link as ScrollLink } from "react-scroll"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="md:hidden">
      <Button onClick={toggleMenu} variant="ghost" size="icon" className="text-white">
        <Menu />
      </Button>
      {isOpen && (
        <div className="absolute top-14 right-0 w-48 py-2 bg-black/80 backdrop-blur-md rounded-md shadow-xl z-20">
          {["home", "skills", "projects", "contact"].map((item) => (
            <ScrollLink
              key={item}
              to={item}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block px-4 py-2 text-sm capitalize text-white hover:bg-gray-700 cursor-pointer"
              onClick={toggleMenu}
            >
              {item}
            </ScrollLink>
          ))}
        </div>
      )}
    </div>
  )
}


'use client'
import { useState, useEffect } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { X, SunDim, MoonStar, CircleEllipsis } from 'lucide-react'
import { useTheme } from "next-themes"


const navList = [
  { value: 'Home', href: '#Home' },
  { value: 'About', href: '#About' },
  { value: 'Projects', href: '#Projects' },
  { value: 'Skills', href: '#Skills' },
  { value: 'Education', href: '#Education' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0)
    return () => clearTimeout(id)
  }, []);


  if (!mounted) return null // avoid SSR mismatch

  return (
    <header className="header fixed top-0 z-1 w-full ">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        {/* Logo */}
        <Button variant={'outline'} size={'icon-lg'} className='rounded-full shadow-2xs' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme == 'dark' ? <MoonStar size={24} /> : <SunDim size={24} />}
        </Button>

        {/* Mobile Menu Button */}
        <Button variant={'outline'} size={'icon-lg'} className='rounded-full shadow-2xs'
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <CircleEllipsis size={24} />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className=" border-t bg-background">
          <div className="flex flex-col gap-4">
            {navList.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm"
              >
                {item.value}
              </Link>
            ))}
            <Button className="mt-2 w-full">Let&apos;s talk</Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

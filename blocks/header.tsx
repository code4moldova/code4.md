import Link from 'next/link'
import React, { useState } from 'react'
import { ActiveLink } from '../components/active-link'
import { Button } from '../components/button'
import { Container } from '../components/container'
import logo from '../images/logo.png'

const menuItems = [
  { title: 'Despre noi', url: '/about-us' },
  { title: 'Comunitate', url: '/community' },
  { title: 'Soluții IT', url: '/solutions' },
  { title: 'Blog', url: '#blog' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <section className="bg-white">
      <Container tag="nav" className="relative z-20">
        <div className="relative flex items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none text-gray-700 hover:text-gray-900 hover:bg-gray-300 focus:bg-gray-300 focus:text-gray-900 transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
              onClick={() => setOpen(!open)}>
              {!open && (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
              {open && (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-start">
            <Link href="/">
              <a className="flex-shrink-0">
                <img className="h-20 lg:h-24 lg:-ml-6 lg:mr-6" src={logo} alt="logo" />
              </a>
            </Link>
            <div className="hidden lg:flex lg:ml-auto items-center">
              {menuItems.map(item => (
                <ActiveLink
                  key={item.url}
                  href={item.url}
                  classNameActive="text-blue-700 border-blue-700"
                  classNameInactive="text-gray-900 hover:text-blue-700 border-white">
                  <a className="ml-4 px-3 py-2 border-b-2 text-sm leading-5 focus:text-blue-700 transition duration-150 ease-in-out">
                    {item.title}
                  </a>
                </ActiveLink>
              ))}
              <Link href="/get-involved" passHref>
                <Button buttonType="primary-outline">
                  <a className="ml-5">Implică-te</a>
                </Button>
              </Link>
              <Link href="/donate" passHref>
                <Button buttonType="primary">
                  <a className="ml-2">Donează</a>
                </Button>
              </Link>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center lg:static lg:inset-auto lg:ml-2">
            <Button buttonType="secondary-outline">
              <button>RO</button>
            </Button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden absolute inset-x-0 bg-white -mt-4 shadow-2xl">
            <div className="px-2 pt-2 pb-3">
              {menuItems.map(item => (
                <ActiveLink
                  key={item.url}
                  href={item.url}
                  classNameActive="text-blue-700 border-blue-700"
                  classNameInactive="text-gray-900 hover:text-blue-700 border-white">
                  <a className="my-1 block px-3 py-2 border-b-2 text-base focus:text-blue-700 transition duration-150 ease-in-out">
                    {item.title}
                  </a>
                </ActiveLink>
              ))}
              <div className="mx-3 flex mt-2">
                <Link href="/get-involved" passHref>
                  <Button buttonType="primary-outline">
                    <a className="w-1/2 mr-2">Implică-te</a>
                  </Button>
                </Link>
                <Link href="/donate" passHref>
                  <Button buttonType="primary">
                    <a className="w-1/2 ml-2">Donează</a>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}

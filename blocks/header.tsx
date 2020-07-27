import React, { useState } from 'react'
import { Container } from '../components/container'
import logo from '../images/logo.png'
import Link from 'next/link'

const menuItems = [
  { title: 'Despre noi', active: false, url: '/about-us' },
  { title: 'Comunitate', active: true, url: '/community' },
  { title: 'Soluții IT', active: false, url: '#solutii' },
  { title: 'Blog', active: false, url: '#blog' },
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
              aria-label="Main menu" aria-expanded="false"
              onClick={() => setOpen(!open)}
            >
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
                <Link key={item.url} href={item.url}>
                  <a
                    className={`ml-4 px-3 py-2 rounded-md text-sm leading-5 focus:text-gray-900 focus:bg-gray-300 transition duration-150 ease-in-out ${item.active ? 'text-gray-900 bg-gray-300 font-medium' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-300'}`}
                  >
                    {item.title}
                  </a>
                </Link>
              ))}
              <button
                className="ml-5 border-2 border-blue-700 text-blue-600 hover:text-white hover:bg-blue-700 px-5 py-2"
              >Implică-te
              </button>
              <button
                className="ml-2 border-2 border-blue-700 text-blue-600 hover:text-white hover:bg-blue-700 px-5 py-2"
              >Donează
              </button>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center lg:static lg:inset-auto lg:ml-2">
            <button className="border-2 px-3 py-2">RO</button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden absolute inset-x-0 bg-white -mt-4 shadow-2xl">
            <div className="px-2 pt-2 pb-3">
              {menuItems.map(item => (
                <Link key={item.url} href={item.url}>
                  <a
                    className={`my-1 block px-3 py-2 rounded-md text-base font-medium focus:text-gray-900 focus:bg-gray-300 transition duration-150 ease-in-out ${item.active ? 'text-gray-900 bg-gray-300 font-medium' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-300'}`}
                  >
                    {item.title}
                  </a>
                </Link>
              ))}
              <div className="mx-3 flex mt-2">
                <button
                  className="w-1/2 mr-2 border-2 border-blue-700 text-blue-600 hover:text-white hover:bg-blue-700 px-5 py-2"
                >Implică-te
                </button>
                <button
                  className="w-1/2 ml-2 border-2 border-blue-700 text-blue-600 hover:text-white hover:bg-blue-700 px-5 py-2"
                >Donează
                </button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}
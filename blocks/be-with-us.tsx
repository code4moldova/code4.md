import React from 'react'
import { Container } from '../components/container'
import { Heading } from '../components/heading'

export function BeWithUs() {
  return (
    <section className="py-3 md:py-24">
      <Container className="flex justify-center">
        <div className="bg-blue-200 py-16 px-24 text-center">
          <Heading tag="h3" className="text-xl mb-6">
            Fii parte din comunitatea noastră
          </Heading>
          <a
            href="#implica-te"
            className="mr-2 border-2 border-blue-700 text-blue-600 hover:text-white hover:bg-blue-700 px-5 py-2"
          >
            Implică-te
          </a>
          <a
            href="#doneaza"
            className="ml-2 border-2 border-blue-700 text-blue-600 hover:text-white hover:bg-blue-700 px-5 py-2"
          >
            Donează
          </a>
        </div>
      </Container>
    </section>
  )
}